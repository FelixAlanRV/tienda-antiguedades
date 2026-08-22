"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Home as HomeIcon, BookOpen, Sparkles, Phone, Menu, LayoutGrid } from "lucide-react";

export function Header() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("");

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (pathname === "/") {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", `/#${id}`);
      }
    }
  };

  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection("");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );

    const sections = document.querySelectorAll("section[id], main[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.1s' }}>
      
      {/* Premium Fading Glass Background - Only on the left half for the Home page */}
      {pathname === "/" && (
        <div 
          className="absolute inset-0 w-full md:w-[70%] lg:w-[60%] h-full bg-black/70 backdrop-blur-md -z-10"
          style={{
            maskImage: 'linear-gradient(to right, black 60%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, black 60%, transparent 100%)'
          }}
        ></div>
      )}

      <div className="relative z-10 flex items-center justify-start gap-12 md:gap-16 px-4 sm:px-8 md:px-12 lg:px-16 py-3">
        <div className="flex items-center">
          <Link href="/">
            <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border border-[#a87b51]/50 shadow-[0_0_15px_rgba(200,155,60,0.15)] cursor-pointer">
              <Image 
                src="/Logo.jpg" 
                alt="Logo Juarez Antigüedades" 
                fill 
                className="object-cover"
              />
            </div>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-xs md:text-sm font-sans font-semibold text-[#fdfbf7]/80">
          <Link href="/#inicio" onClick={(e) => handleScroll(e, 'inicio')} className={`flex items-center gap-2 hover:text-[#a87b51] transition-colors duration-300 ${activeSection === 'inicio' ? 'text-[#a87b51]' : ''}`}>
            <HomeIcon className="w-4 h-4" /> Inicio
          </Link>
          <Link href="/#historia" onClick={(e) => handleScroll(e, 'historia')} className={`flex items-center gap-2 hover:text-[#a87b51] transition-colors duration-300 ${activeSection === 'historia' ? 'text-[#a87b51]' : ''}`}>
            <BookOpen className="w-4 h-4" /> Historia
          </Link>
          <Link href="/#coleccion" onClick={(e) => handleScroll(e, 'coleccion')} className={`flex items-center gap-2 hover:text-[#a87b51] transition-colors duration-300 ${activeSection === 'coleccion' ? 'text-[#a87b51]' : ''}`}>
            <Sparkles className="w-4 h-4" /> Destacadas
          </Link>
          <Link href="/#contacto" onClick={(e) => handleScroll(e, 'contacto')} className={`flex items-center gap-2 hover:text-[#a87b51] transition-colors duration-300 ${activeSection === 'contacto' ? 'text-[#a87b51]' : ''}`}>
            <Phone className="w-4 h-4" /> Contacto
          </Link>
          <div className="w-[1px] h-4 bg-white/20 hidden md:block"></div>
          <Link href="/catalogo" className={`flex items-center gap-2 hover:text-[#a87b51] transition-colors duration-300 ${pathname === '/catalogo' ? 'text-[#a87b51]' : ''}`}>
            <LayoutGrid className="w-4 h-4" /> Catálogo
          </Link>
        </nav>
        
        {/* Mobile menu button */}
        <button className="md:hidden ml-auto text-[#fdfbf7] p-2 hover:text-[#a87b51] transition-colors">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
}
