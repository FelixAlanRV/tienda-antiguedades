"use client";

import { useState, useRef, useEffect } from "react";
import { X, Upload, Image as ImageIcon, Plus } from "lucide-react";
import Image from "next/image";
import { supabase } from "@/lib/supabase";

export interface Product {
  id: string;
  title: string;
  description: string;
  price: string;
  epoch: string;
  imageUrl: string;
  images?: string[];
}

interface ProductFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (product: Product) => void;
  productToEdit?: Product | null;
}

export function ProductFormModal({ isOpen, onClose, onSave, productToEdit }: ProductFormModalProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [epoch, setEpoch] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");
  const [existingGallery, setExistingGallery] = useState<string[]>([]);
  const [newGalleryFiles, setNewGalleryFiles] = useState<File[]>([]);
  const [newGalleryPreviews, setNewGalleryPreviews] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const galleryInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      if (productToEdit) {
        setTitle(productToEdit.title);
        setDescription(productToEdit.description);
        setPrice(productToEdit.price);
        setEpoch(productToEdit.epoch);
        setImagePreview(productToEdit.imageUrl);
        setExistingGallery(productToEdit.images || []);
      } else {
        setTitle("");
        setDescription("");
        setPrice("");
        setEpoch("");
        setImagePreview("");
        setImageFile(null);
        setExistingGallery([]);
      }
      setNewGalleryFiles([]);
      setNewGalleryPreviews([]);
    }
  }, [isOpen, productToEdit]);

  if (!isOpen) return null;

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGalleryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length > 0) {
      setNewGalleryFiles(prev => [...prev, ...files]);
      files.forEach(file => {
        const reader = new FileReader();
        reader.onloadend = () => {
          setNewGalleryPreviews(prev => [...prev, reader.result as string]);
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const removeExistingGalleryImage = (index: number) => {
    setExistingGallery(prev => prev.filter((_, i) => i !== index));
  };

  const removeNewGalleryImage = (index: number) => {
    setNewGalleryFiles(prev => prev.filter((_, i) => i !== index));
    setNewGalleryPreviews(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      let imageUrl = productToEdit ? productToEdit.imageUrl : "";

      if (imageFile) {
        const fileExt = imageFile.name.split('.').pop();
        const fileName = `${Math.random().toString(36).substring(2, 15)}_${Date.now()}.${fileExt}`;
        
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from("products-images")
          .upload(fileName, imageFile, {
            cacheControl: '3600',
            upsert: false
          });

        if (uploadError) {
          throw new Error("Error subiendo imagen: " + uploadError.message);
        }

        const { data: { publicUrl } } = supabase.storage
          .from("products-images")
          .getPublicUrl(fileName);
          
        imageUrl = publicUrl;
      }

      let uploadedGalleryUrls: string[] = [];
      
      if (newGalleryFiles.length > 0) {
        for (const file of newGalleryFiles) {
          const fileExt = file.name.split('.').pop();
          const fileName = `gallery_${Math.random().toString(36).substring(2, 15)}_${Date.now()}.${fileExt}`;
          
          const { error: uploadError } = await supabase.storage
            .from("products-images")
            .upload(fileName, file, { cacheControl: '3600', upsert: false });

          if (!uploadError) {
            const { data: { publicUrl } } = supabase.storage
              .from("products-images")
              .getPublicUrl(fileName);
            uploadedGalleryUrls.push(publicUrl);
          }
        }
      }

      const finalGallery = [...existingGallery, ...uploadedGalleryUrls];

      const productData = {
        title,
        description,
        price,
        epoch,
        imageUrl,
        images: finalGallery,
      };

      let resultProduct;

      if (productToEdit) {
        const { data, error } = await supabase
          .from("products")
          .update(productData)
          .eq("id", productToEdit.id)
          .select()
          .single();
          
        if (error) throw error;
        resultProduct = data;
      } else {
        const { data, error } = await supabase
          .from("products")
          .insert([productData])
          .select()
          .single();
          
        if (error) throw error;
        resultProduct = data;
      }

      onSave(resultProduct as Product);
      onClose();
    } catch (error: any) {
      console.error(error);
      alert(error.message || "Error al guardar");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-modal-fade"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-5xl bg-[#0f0f0f] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-modal-zoom"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <h2 className="text-xl font-serif text-[#fdfbf7]">
            {productToEdit ? "Editar Producto" : "Nuevo Producto"}
          </h2>
          <button onClick={onClose} className="text-white/50 hover:text-white transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto">
          <form id="product-form" onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-8">
            
            {/* Left Column: Images */}
            <div className="w-full md:w-5/12 flex flex-col gap-6">
              {/* Image Upload Area */}
              <div className="flex flex-col items-center">
              <div 
                className={`w-full h-64 border-2 border-dashed ${imagePreview ? 'border-[#a87b51]/50' : 'border-white/20'} rounded-xl flex flex-col items-center justify-center relative overflow-hidden bg-white/[0.02] cursor-pointer hover:bg-white/[0.05] transition-colors`}
                onClick={() => fileInputRef.current?.click()}
              >
                {imagePreview ? (
                  <Image src={imagePreview} alt="Preview" fill className="object-contain p-2" />
                ) : (
                  <div className="flex flex-col items-center text-white/50">
                    <ImageIcon className="w-12 h-12 mb-2 opacity-50" />
                    <span className="text-sm font-medium">Haz clic para subir imagen</span>
                  </div>
                )}
              </div>
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleImageChange} 
                accept="image/*" 
                className="hidden" 
              />
            </div>

            {/* Gallery Upload Area */}
            <div className="space-y-4">
              <label className="text-sm text-white/70 font-medium">Galería Adicional</label>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {/* Existing Gallery */}
                {existingGallery.map((url, idx) => (
                  <div key={`existing-${idx}`} className="relative h-24 rounded-lg overflow-hidden border border-white/10 group">
                    <Image src={url} alt={`Gallery ${idx}`} fill className="object-cover" />
                    <button 
                      type="button"
                      onClick={() => removeExistingGalleryImage(idx)}
                      className="absolute top-1 right-1 p-1 bg-black/60 rounded-full text-white/70 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                ))}
                
                {/* New Gallery */}
                {newGalleryPreviews.map((url, idx) => (
                  <div key={`new-${idx}`} className="relative h-24 rounded-lg overflow-hidden border border-white/10 group">
                    <Image src={url} alt={`New Gallery ${idx}`} fill className="object-cover" />
                    <button 
                      type="button"
                      onClick={() => removeNewGalleryImage(idx)}
                      className="absolute top-1 right-1 p-1 bg-black/60 rounded-full text-white/70 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                ))}

                {/* Add button */}
                <div 
                  onClick={() => galleryInputRef.current?.click()}
                  className="h-24 rounded-lg border-2 border-dashed border-white/20 hover:border-[#a87b51]/50 bg-white/[0.02] hover:bg-white/[0.05] flex flex-col items-center justify-center cursor-pointer transition-colors"
                >
                  <Plus className="w-6 h-6 text-white/50 mb-1" />
                  <span className="text-[10px] text-white/50 uppercase tracking-wider">Añadir</span>
                </div>
                <input 
                  type="file"
                  ref={galleryInputRef}
                  onChange={handleGalleryChange}
                  accept="image/*"
                  multiple
                  className="hidden"
                />
              </div>
            </div>
            </div>

            {/* Right Column: Details */}
            <div className="w-full md:w-7/12 grid grid-cols-1 md:grid-cols-2 gap-6 h-fit">
              <div className="space-y-2">
                <label className="text-sm text-white/70 font-medium">Título del Producto *</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-[#fdfbf7] focus:outline-none focus:border-[#a87b51]/50"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm text-white/70 font-medium">Precio (MXN) *</label>
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-[#fdfbf7] focus:outline-none focus:border-[#a87b51]/50"
                  required
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <label className="text-sm text-white/70 font-medium">Año / Época</label>
                <input
                  type="text"
                  value={epoch}
                  onChange={(e) => setEpoch(e.target.value)}
                  placeholder="Ej: Finales del siglo XIX, Años 20s..."
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-[#fdfbf7] focus:outline-none focus:border-[#a87b51]/50"
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <label className="text-sm text-white/70 font-medium">Descripción</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={4}
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-[#fdfbf7] focus:outline-none focus:border-[#a87b51]/50 resize-none"
                />
              </div>
            </div>

          </form>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-white/10 flex justify-end gap-4 bg-black/20">
          <button 
            type="button" 
            onClick={onClose}
            className="px-6 py-2.5 rounded-lg text-white/70 hover:text-white transition-colors"
          >
            Cancelar
          </button>
          <button 
            type="submit" 
            form="product-form"
            disabled={loading}
            className="px-6 py-2.5 bg-[#a87b51] hover:bg-[#b98a5d] text-white font-medium rounded-lg transition-colors flex items-center gap-2 disabled:opacity-50"
          >
            <Upload className="w-4 h-4" />
            {loading ? "Guardando..." : "Guardar Producto"}
          </button>
        </div>
        
      </div>
    </div>
  );
}
