"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Plus, Edit2, Trash2, Clock, LogOut, PackageOpen, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, ChevronDown, X } from "lucide-react";
import { ProductFormModal, Product } from "@/components/ProductFormModal";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export function CatalogClient() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [totalItems, setTotalItems] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [deleteModalId, setDeleteModalId] = useState<string | null>(null);
  const [deleteModalImageUrl, setDeleteModalImageUrl] = useState<string | null>(null);
  const [detailsModalProduct, setDetailsModalProduct] = useState<Product | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const from = (currentPage - 1) * itemsPerPage;
      const to = from + itemsPerPage - 1;

      const { data, count, error } = await supabase
        .from("products")
        .select("*", { count: "exact" })
        .order("created_at", { ascending: true })
        .range(from, to);
        
      if (error) throw error;
      if (data) setProducts(data);
      if (count !== null) setTotalItems(count);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const checkUser = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    setIsAdmin(!!session);
  };

  useEffect(() => {
    checkUser();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setIsAdmin(!!session);
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [currentPage, itemsPerPage]);

  const handleDeleteClick = (id: string, imageUrl: string) => {
    setDeleteModalId(id);
    setDeleteModalImageUrl(imageUrl);
  };

  const confirmDelete = async () => {
    if (!deleteModalId) return;
    
    try {
      // Borrar imagen del storage si existe
      if (deleteModalImageUrl) {
        const path = deleteModalImageUrl.split('/').pop();
        if (path) {
          await supabase.storage.from("products-images").remove([path]);
        }
      }

      // Borrar registro de la BD
      const { error } = await supabase.from("products").delete().eq("id", deleteModalId);
      
      if (!error) {
        fetchProducts();
      } else {
        alert("Error eliminando producto: " + error.message);
      }
    } catch (err) {
      alert("Error en la solicitud");
    } finally {
      setDeleteModalId(null);
      setDeleteModalImageUrl(null);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.refresh();
  }

  return (
    <>
      <div className="flex flex-col xl:flex-row justify-between items-start mb-12 gap-8">
        <div>
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-[#a87b51]"></div>
            <span className="text-[#a87b51] tracking-[0.3em] uppercase text-xs font-semibold">Colección Exclusiva</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#fdfbf7] mb-6 tracking-wide">
            Catálogo de <span className="text-[#a87b51] font-light lowercase tracking-tight text-glow-bright">antig<span className="animate-neon-flicker inline-block">ü</span>ed<span className="animate-neon-flicker inline-block" style={{ animationDelay: '1.2s' }}>ad</span>es</span>
          </h1>
          <p className="text-[#fdfbf7]/60 max-w-2xl font-light text-lg leading-relaxed">
            Explora nuestra selección curada de piezas únicas. Cada objeto cuenta una historia esperando ser descubierta y apreciada en tu espacio.
          </p>
        </div>

        {isAdmin && (
          <div className="flex gap-4 shrink-0 w-full xl:w-auto xl:mt-10">
            <button 
              onClick={() => { setEditingProduct(null); setIsModalOpen(true); }}
              className="flex-1 xl:flex-none justify-center bg-[#a87b51] hover:bg-[#b98a5d] text-white px-6 py-2.5 rounded-lg transition-colors flex items-center gap-2 font-medium"
            >
              <Plus className="w-5 h-5" />
              Añadir Producto
            </button>
            
            <button 
              onClick={handleLogout}
              className="flex-1 xl:flex-none justify-center bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 px-6 py-2.5 rounded-lg transition-colors flex items-center gap-2 font-medium"
            >
              <LogOut className="w-4 h-4" />
              Cerrar Sesión
            </button>
          </div>
        )}
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array.from({ length: itemsPerPage }).map((_, i) => (
            <div key={i} className="bg-white/[0.02] border border-white/5 rounded-2xl overflow-hidden animate-pulse flex flex-col">
              <div className="h-64 w-full bg-white/5"></div>
              <div className="p-6 flex-1 flex flex-col gap-4">
                <div className="flex justify-between items-start gap-4">
                  <div className="h-6 bg-white/10 rounded w-2/3"></div>
                  <div className="h-6 bg-[#a87b51]/20 rounded w-1/4"></div>
                </div>
                <div className="h-4 bg-white/5 rounded w-1/3"></div>
                <div className="space-y-2 mt-2">
                  <div className="h-3 bg-white/5 rounded w-full"></div>
                  <div className="h-3 bg-white/5 rounded w-5/6"></div>
                  <div className="h-3 bg-white/5 rounded w-4/6"></div>
                </div>
                <div className="mt-8 pt-6 border-t border-white/5">
                  <div className="h-10 bg-[#a87b51]/10 rounded w-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : products.length === 0 ? (
        <div className="text-center py-24 bg-white/[0.02] border border-white/5 rounded-2xl flex flex-col items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-white/[0.03] flex items-center justify-center mb-6 border border-white/10">
            <PackageOpen className="w-10 h-10 text-white/30" strokeWidth={1.5} />
          </div>
          <h3 className="text-xl font-serif text-[#fdfbf7] mb-2">Catálogo Vacío</h3>
          <p className="text-white/50 text-base max-w-md">
            No hay productos en el catálogo todavía. Los artículos que añadas aparecerán aquí.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="group relative bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:border-[#a87b51]/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(168,123,81,0.15)] flex flex-col">
              
              {isAdmin && (
                <div className="absolute top-3 right-3 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button 
                    onClick={() => { setEditingProduct(product); setIsModalOpen(true); }}
                    className="p-2 bg-black/60 backdrop-blur-md rounded-full text-white/80 hover:text-white border border-white/20 hover:border-[#a87b51] transition-colors"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => handleDeleteClick(product.id, product.imageUrl)}
                    className="p-2 bg-black/60 backdrop-blur-md rounded-full text-white/80 hover:text-red-400 border border-white/20 hover:border-red-400/50 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              )}

              <div className="relative h-64 w-full overflow-hidden bg-black/50">
                {product.imageUrl ? (
                  <Image 
                    src={product.imageUrl} 
                    alt={product.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-white/20 font-serif">Sin imagen</div>
                )}
                {/* Gradient overlay to make text readable */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80"></div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2 gap-4">
                  <h3 className="text-xl font-serif text-[#fdfbf7] leading-tight">{product.title}</h3>
                  <span className="text-[#a87b51] font-semibold tracking-wide whitespace-nowrap">
                    ${Number(product.price).toLocaleString('es-MX')}
                  </span>
                </div>
                
                <div className="flex items-center gap-1.5 text-[#fdfbf7]/40 text-xs uppercase tracking-wider mb-4">
                  <Clock className="w-3 h-3" />
                  Año / Época: {product.epoch || "Sin definir"}
                </div>
                
                <p className="text-[#fdfbf7]/60 text-sm leading-relaxed flex-1 font-light whitespace-pre-line line-clamp-3">
                  {product.description}
                </p>
                
                <div className="mt-6 pt-6 border-t border-white/10">
                  <button 
                    onClick={() => {
                      setDetailsModalProduct(product);
                      setCurrentImageIndex(0);
                    }}
                    className="w-full py-2.5 rounded border border-[#a87b51]/30 text-[#a87b51] hover:bg-[#a87b51] hover:text-white transition-colors text-sm uppercase tracking-widest font-medium"
                  >
                    Ver Detalles
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {products.length > 0 && (
        <div className="mt-12 flex flex-col xl:flex-row xl:justify-between items-center border-t border-white/10 pt-6 gap-6">
          <div className="text-sm text-white/50 text-center xl:text-left">
            Mostrando {totalItems === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1} a {Math.min(currentPage * itemsPerPage, totalItems)} de {totalItems} resultados
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-6">
            <div className="flex items-center gap-2" ref={dropdownRef}>
              <span className="text-sm text-white/50">Filas por página</span>
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center justify-between w-16 bg-white/5 border border-white/10 hover:border-[#a87b51]/50 text-white/70 text-sm rounded-lg px-2 py-1.5 outline-none cursor-pointer transition-colors"
                >
                  {itemsPerPage}
                  <ChevronDown className="w-4 h-4 opacity-50" />
                </button>
                
                {isDropdownOpen && (
                  <div className="absolute bottom-full mb-1 left-0 w-full bg-[#0a0a0a] border border-white/10 rounded-lg shadow-xl overflow-hidden z-50 animate-in fade-in zoom-in-95 duration-200">
                    {[8, 12, 24, 48].map((size) => (
                      <button
                        key={size}
                        onClick={() => {
                          setItemsPerPage(size);
                          setCurrentPage(1);
                          setIsDropdownOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 text-sm transition-colors ${itemsPerPage === size ? 'bg-[#a87b51]/20 text-[#a87b51]' : 'text-white/70 hover:bg-white/10 hover:text-white'}`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <span className="text-sm text-white/50 font-medium">
              Página {currentPage} de {Math.max(1, Math.ceil(totalItems / itemsPerPage))}
            </span>
            
            <div className="flex gap-2">
              <button 
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(1)}
                className="hidden sm:flex p-2 rounded-lg border border-white/10 bg-white/5 text-white/70 hover:text-white hover:border-[#a87b51] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronsLeft className="w-5 h-5" />
              </button>
              <button 
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                className="p-2 rounded-lg border border-white/10 bg-white/5 text-white/70 hover:text-white hover:border-[#a87b51] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                disabled={currentPage >= Math.ceil(totalItems / itemsPerPage) || totalItems === 0}
                onClick={() => setCurrentPage(prev => Math.min(Math.ceil(totalItems / itemsPerPage), prev + 1))}
                className="p-2 rounded-lg border border-white/10 bg-white/5 text-white/70 hover:text-white hover:border-[#a87b51] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              <button 
                disabled={currentPage >= Math.ceil(totalItems / itemsPerPage) || totalItems === 0}
                onClick={() => setCurrentPage(Math.max(1, Math.ceil(totalItems / itemsPerPage)))}
                className="hidden sm:flex p-2 rounded-lg border border-white/10 bg-white/5 text-white/70 hover:text-white hover:border-[#a87b51] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronsRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      <ProductFormModal 
        isOpen={isModalOpen}
        onClose={() => { setIsModalOpen(false); setEditingProduct(null); }}
        productToEdit={editingProduct}
        onSave={() => {
          fetchProducts();
        }}
      />

      {/* Delete Confirmation Modal */}
      {deleteModalId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setDeleteModalId(null)}></div>
          <div className="relative bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 max-w-md w-full shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <h3 className="text-xl font-serif text-[#fdfbf7] mb-4">Confirmar Eliminación</h3>
            <p className="text-white/60 mb-8 font-light leading-relaxed">
              ¿Estás seguro de que deseas eliminar esta pieza de la colección? Esta acción no se puede deshacer.
            </p>
            <div className="flex justify-end gap-4">
              <button 
                onClick={() => setDeleteModalId(null)}
                className="px-6 py-2.5 rounded-lg border border-white/10 text-white/70 hover:text-white hover:bg-white/5 transition-colors font-medium text-sm uppercase tracking-wider"
              >
                Cancelar
              </button>
              <button 
                onClick={confirmDelete}
                className="px-6 py-2.5 rounded-lg bg-red-500/20 text-red-400 border border-red-500/30 hover:bg-red-500 hover:text-white transition-colors font-medium text-sm uppercase tracking-wider"
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Product Details Modal */}
      {detailsModalProduct && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-modal-fade">
          <div className="absolute inset-0" onClick={() => setDetailsModalProduct(null)}></div>
          <div className="relative w-full max-w-5xl bg-[#0f0f0f] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] animate-modal-zoom">
            <button 
              onClick={() => setDetailsModalProduct(null)} 
              className="absolute top-4 right-4 z-10 text-white/50 hover:text-white bg-black/40 backdrop-blur-md p-2 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            
            {/* Left side: Carousel */}
            <div className="w-full md:w-1/2 relative bg-black flex items-center justify-center min-h-[300px] md:min-h-full">
              {(() => {
                const allImages = [detailsModalProduct.imageUrl];
                if (detailsModalProduct.images && detailsModalProduct.images.length > 0) {
                  allImages.push(...detailsModalProduct.images);
                }
                
                const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
                const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
                
                return (
                  <>
                    <Image 
                      src={allImages[currentImageIndex]} 
                      alt={detailsModalProduct.title} 
                      fill 
                      className="object-contain p-8 md:p-12"
                    />
                    
                    {allImages.length > 1 && (
                      <>
                        <button 
                          onClick={prevImage}
                          className="absolute left-4 p-2 bg-black/60 backdrop-blur-md rounded-full text-white/70 hover:text-white border border-white/20 transition-colors"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button 
                          onClick={nextImage}
                          className="absolute right-4 p-2 bg-black/60 backdrop-blur-md rounded-full text-white/70 hover:text-white border border-white/20 transition-colors"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>
                        
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                          {allImages.map((_, idx) => (
                            <button
                              key={idx}
                              onClick={() => setCurrentImageIndex(idx)}
                              className={`w-2 h-2 rounded-full transition-colors ${idx === currentImageIndex ? 'bg-[#a87b51]' : 'bg-white/30'}`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </>
                );
              })()}
            </div>
            
            {/* Right side: Details */}
            <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col overflow-y-auto">
              <div className="flex justify-between items-start gap-4 mb-4">
                <h2 className="text-3xl font-serif text-[#fdfbf7] leading-tight">{detailsModalProduct.title}</h2>
              </div>
              
              <div className="text-2xl text-[#a87b51] font-semibold tracking-wide mb-6">
                ${Number(detailsModalProduct.price).toLocaleString('es-MX')}
              </div>
              
              <div className="flex items-center gap-2 text-[#fdfbf7]/50 text-sm uppercase tracking-widest mb-8 border-b border-white/10 pb-6">
                <Clock className="w-4 h-4 text-[#a87b51]" />
                Año / Época: {detailsModalProduct.epoch || "Sin definir"}
              </div>
              
              <div className="flex-1">
                <h4 className="text-xs uppercase tracking-widest text-white/40 mb-3 font-semibold">Descripción</h4>
                <p className="text-[#fdfbf7]/70 text-base leading-relaxed font-light whitespace-pre-wrap">
                  {detailsModalProduct.description}
                </p>
              </div>
              
              <div className="mt-10 pt-6 border-t border-white/10 flex flex-col gap-2">
                <span className="text-[#a87b51] text-xs uppercase tracking-widest font-semibold">¿Te interesa esta pieza?</span>
                <p className="text-[#fdfbf7]/70 text-sm font-light">
                  Contáctanos por WhatsApp al <span className="text-white font-medium">+52 55 1234 5678</span> y menciona el título de esta antigüedad para brindarte más detalles.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
