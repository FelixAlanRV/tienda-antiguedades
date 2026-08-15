import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] font-sans">
      {/* Hero Wrapper - Keeps the background image contained to the first screen */}
      <div className="relative min-h-screen flex flex-col">
        {/* Header */}
      <header className="absolute top-0 left-0 w-full z-30 flex items-center justify-start gap-12 md:gap-16 px-4 sm:px-8 md:px-12 lg:px-16 py-8">
        <div className="flex items-center">
          <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden border border-[#c89b3c]/50 shadow-[0_0_15px_rgba(200,155,60,0.15)]">
            <Image 
              src="/Logo.jpg" 
              alt="Logo Juarez Antigüedades" 
              fill 
              className="object-cover"
            />
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-xs md:text-sm uppercase tracking-widest text-[#fdfbf7]/80">
          <a href="#coleccion" className="hover:text-[#c89b3c] transition-colors duration-300">Colección</a>
          <a href="#historia" className="hover:text-[#c89b3c] transition-colors duration-300">Historia</a>
          <a href="#servicios" className="hover:text-[#c89b3c] transition-colors duration-300">Servicios</a>
          <a href="#contacto" className="hover:text-[#c89b3c] transition-colors duration-300">Contacto</a>
        </nav>
        
        {/* Mobile menu button */}
        <button className="md:hidden ml-auto text-[#fdfbf7] p-2 hover:text-[#c89b3c] transition-colors">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>

      {/* Background Image Container */}
      {/* The image acts as the background, positioned absolutely to cover the screen.
          We aren't adding an overlay because the left side is naturally black. */}
      <div className="absolute inset-0 z-0 bg-black overflow-hidden">
        <Image
          src="/bg-hero-section.png"
          alt="Fachada de El Candelabro Antigüedades de noche"
          fill
          priority
          quality={100}
          className="object-cover object-center"
        />
        
        {/* Efectos de luces animadas */}
        {/* Luz del candelabro (arriba) */}
        <div 
          className="absolute w-[50%] md:w-[35%] lg:w-[25%] aspect-square rounded-full pointer-events-none mix-blend-screen animate-soft-pulse"
          style={{
            top: '28%',
            left: '77%',
            transform: 'translate(-50%, -50%)',
            background: 'radial-gradient(circle, rgba(245,215,110,0.65) 0%, rgba(229,169,61,0.2) 35%, transparent 70%)'
          }}
        ></div>

        {/* Luz de la lámpara en la entrada (abajo) */}
        <div 
          className="absolute w-[40%] md:w-[25%] lg:w-[18%] aspect-square rounded-full pointer-events-none mix-blend-screen animate-soft-pulse"
          style={{
            top: '49%',
            left: '81%',
            transform: 'translate(-50%, -50%)',
            background: 'radial-gradient(circle, rgba(245,215,110,0.55) 0%, rgba(229,169,61,0.15) 30%, transparent 70%)'
          }}
        ></div>
      </div>

      {/* Hero Content */}
      <section className="relative z-10 flex-1 flex flex-col justify-center px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 w-full">
        {/* We constrain the text to the left half (max-w-xl) to live inside the black fade */}
        <div className="max-w-xl w-full">
          
          {/* Eyebrow / Kicker */}
          <div className="flex items-center gap-4 mb-6 md:mb-8">
            <span className="h-px w-12 bg-[#e5a93d]"></span>
            <span className="text-[#e5a93d] uppercase tracking-[0.2em] text-xs font-semibold">
              Muebles, decoración y curiosidades
            </span>
          </div>
          
          {/* Headline */}
          <h1 className="font-serif text-6xl md:text-8xl lg:text-[6rem] leading-[1.05] text-[#fdfbf7] mb-8 tracking-[0.05em] uppercase">
            JUAREZ <br />
            <span className="italic text-[#c89b3c] font-light lowercase tracking-normal text-5xl md:text-7xl lg:text-[5rem]">antigüedades</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-[#fdfbf7]/80 text-lg md:text-xl font-light max-w-md mb-12 leading-relaxed">
            Descubre piezas únicas con historia. Un rincón donde el pasado cobra vida y cada objeto tiene un secreto que contar.
          </p>
          
          {/* CTA */}
          <button className="group relative inline-flex items-center justify-start gap-4 text-[#fdfbf7] hover:text-[#c89b3c] transition-colors duration-500 pb-2 mt-4">
            <span className="font-serif tracking-[0.2em] text-xs md:text-sm uppercase relative z-10">
              Explorar la colección
            </span>
            <svg 
              className="w-4 h-4 transform transition-transform duration-500 group-hover:translate-x-2" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            {/* Animated Underline */}
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#c89b3c] transition-all duration-500 ease-out group-hover:w-full"></span>
          </button>
        </div>
      </section>
      </div> {/* End Hero Wrapper */}

      {/* About Us / Historia Section */}
      <section id="historia" className="relative z-10 w-full bg-[#0a0a0a] py-24 md:py-32 px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 flex flex-col md:flex-row items-center justify-between gap-16 md:gap-24 border-t border-[#c89b3c]/20">
        
        {/* Left Side: Logo/Image */}
        <div className="w-full md:w-5/12 flex justify-center md:justify-end relative">
          {/* Decorative background element */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 bg-[#c89b3c]/5 rounded-full filter blur-3xl pointer-events-none"></div>
          
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden border border-[#c89b3c]/30 shadow-[0_0_40px_rgba(200,155,60,0.08)] group">
            <Image 
              src="/Logo.jpg" 
              alt="Sello Juarez Antigüedades" 
              fill 
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Overlay to blend the logo slightly with the dark theme */}
            <div className="absolute inset-0 bg-[#0a0a0a]/20 group-hover:bg-transparent transition-colors duration-700"></div>
          </div>
        </div>

        {/* Right Side: Text */}
        <div className="w-full md:w-7/12 flex flex-col justify-center relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <span className="h-px w-12 bg-[#c89b3c]"></span>
            <span className="text-[#c89b3c] uppercase tracking-[0.2em] text-xs md:text-sm font-semibold">
              Nuestra Esencia
            </span>
          </div>
          
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#fdfbf7] mb-8 leading-[1.15]">
            Rescatando el <span className="italic text-[#c89b3c] font-light">alma</span> <br className="hidden lg:block"/> de cada época.
          </h2>
          
          <div className="space-y-6 text-[#fdfbf7]/70 font-light text-base md:text-lg leading-relaxed max-w-2xl">
            <p>
              En Juarez Antigüedades no somos simples anticuarios; somos custodios de la historia. Creemos firmemente que cada mueble, cada pintura y cada objeto decorativo encierra secretos de las vidas que ha tocado y los salones que ha adornado.
            </p>
            <p>
              Con más de dos décadas de experiencia recorriendo el mundo y seleccionando meticulosamente cada pieza, nuestra colección es un tributo a la artesanía olvidada, la elegancia atemporal y el lenguaje de lo exclusivo. Aquí, el pasado no es un recuerdo lejano, es una presencia tangible lista para transformar tu espacio.
            </p>
          </div>
          
          {/* Quality badge or signature */}
          <div className="mt-10 pt-8 border-t border-[#fdfbf7]/10 flex items-center gap-6">
            <div className="w-12 h-12 rounded-full bg-[#c89b3c]/10 border border-[#c89b3c]/20 flex items-center justify-center text-[#c89b3c]">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <div>
              <p className="text-[#fdfbf7] font-serif text-lg tracking-wide">Tradición & Curaduría</p>
              <p className="text-[#c89b3c] text-xs font-light tracking-[0.2em] uppercase mt-1">Desde 1998</p>
            </div>
          </div>
        </div>

      </section>

      {/* Gallery Section */}
      <section id="coleccion" className="relative z-10 w-full bg-[#050505] py-32 px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 overflow-hidden">
        {/* Background ambient light */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#c89b3c]/5 via-transparent to-transparent pointer-events-none"></div>

        <div className="relative z-10">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-24 md:mb-32 border-b border-[#c89b3c]/10 pb-12">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 mb-8">
                <span className="h-px w-12 bg-[#c89b3c]"></span>
                <span className="text-[#c89b3c] uppercase tracking-[0.3em] text-xs font-semibold">
                  Colección Privada
                </span>
              </div>
              <h2 className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.1] text-[#fdfbf7]">
                Tesoros del <br/>
                <span className="italic text-[#c89b3c] font-light">Pasado</span>
              </h2>
            </div>
            <div className="max-w-sm text-[#fdfbf7]/60 font-light text-base md:text-lg leading-relaxed mb-2">
              <p>Una muestra exclusiva de nuestras adquisiciones más recientes. Piezas que trascienden el tiempo, esperando escribir un nuevo capítulo en su historia.</p>
            </div>
          </div>

          {/* Grid Layout - High-end Editorial Style */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-24 md:gap-x-12 lg:gap-x-16">
            
            {/* Item 1 - Hero Image (Left, spans 7) */}
            <div className="md:col-span-7 group cursor-pointer relative">
              <div className="absolute -inset-4 bg-[#c89b3c]/0 group-hover:bg-[#c89b3c]/5 transition-colors duration-700 -z-10 hidden md:block"></div>
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#0a0a0a]">
                <Image 
                  src="/Anitguedad 1.png" 
                  fill 
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="object-cover transition-transform duration-[2s] group-hover:scale-110 opacity-90 group-hover:opacity-100" 
                  alt="Reloj de Pie Antiguo" 
                />
              </div>
              <div className="mt-8 flex justify-between items-start border-t border-[#fdfbf7]/10 pt-6">
                <div>
                  <h3 className="font-serif text-3xl text-[#fdfbf7] group-hover:text-[#c89b3c] transition-colors duration-500">Reloj de Pie Francés</h3>
                  <p className="text-[#fdfbf7]/50 text-xs tracking-[0.15em] mt-3 uppercase">Circa 1850 — Época Napoleón III</p>
                </div>
                <span className="text-[#c89b3c] font-serif italic text-2xl">01</span>
              </div>
            </div>

            {/* Item 2 - Medium Image (Right, spans 5) - Pushed down */}
            <div className="md:col-span-5 md:pt-48 group cursor-pointer relative">
               <div className="absolute -inset-4 bg-[#c89b3c]/0 group-hover:bg-[#c89b3c]/5 transition-colors duration-700 -z-10 hidden md:block"></div>
              <div className="relative w-full aspect-[3/4] overflow-hidden bg-[#0a0a0a]">
                <Image 
                  src="/Anitiguedad 2.png" 
                  fill 
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover transition-transform duration-[2s] group-hover:scale-110 opacity-90 group-hover:opacity-100" 
                  alt="Candelabro de Bronce" 
                />
              </div>
              <div className="mt-8 flex justify-between items-start border-t border-[#fdfbf7]/10 pt-6">
                <div>
                  <h3 className="font-serif text-2xl text-[#fdfbf7] group-hover:text-[#c89b3c] transition-colors duration-500">Candelabro de Bronce</h3>
                  <p className="text-[#fdfbf7]/50 text-xs tracking-[0.15em] mt-3 uppercase">Finales del Siglo XIX</p>
                </div>
                <span className="text-[#c89b3c] font-serif italic text-2xl">02</span>
              </div>
            </div>

            {/* Item 3 - Square Image (Left, spans 5, offset 1) */}
            <div className="md:col-span-5 md:col-start-2 group cursor-pointer relative md:-mt-24">
              <div className="absolute -inset-4 bg-[#c89b3c]/0 group-hover:bg-[#c89b3c]/5 transition-colors duration-700 -z-10 hidden md:block"></div>
              <div className="relative w-full aspect-square overflow-hidden bg-[#0a0a0a]">
                <Image 
                  src="/Antiguedad 3.png" 
                  fill 
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover transition-transform duration-[2s] group-hover:scale-110 opacity-90 group-hover:opacity-100" 
                  alt="Espejo Rococó" 
                />
              </div>
              <div className="mt-8 flex justify-between items-start border-t border-[#fdfbf7]/10 pt-6">
                <div>
                  <h3 className="font-serif text-2xl text-[#fdfbf7] group-hover:text-[#c89b3c] transition-colors duration-500">Espejo Rococó</h3>
                  <p className="text-[#fdfbf7]/50 text-xs tracking-[0.15em] mt-3 uppercase">Madera tallada y pan de oro</p>
                </div>
                <span className="text-[#c89b3c] font-serif italic text-2xl">03</span>
              </div>
            </div>

            {/* Item 4 - Landscape Image (Right, spans 6) */}
            <div className="md:col-span-6 md:col-start-7 group cursor-pointer relative md:pt-32">
              <div className="absolute -inset-4 bg-[#c89b3c]/0 group-hover:bg-[#c89b3c]/5 transition-colors duration-700 -z-10 hidden md:block"></div>
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#0a0a0a]">
                <Image 
                  src="/Antiguedad 4.png" 
                  fill 
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[2s] group-hover:scale-110 opacity-90 group-hover:opacity-100" 
                  alt="Aparador Isabelino" 
                />
              </div>
              <div className="mt-8 flex justify-between items-start border-t border-[#fdfbf7]/10 pt-6">
                <div>
                  <h3 className="font-serif text-2xl text-[#fdfbf7] group-hover:text-[#c89b3c] transition-colors duration-500">Aparador Isabelino</h3>
                  <p className="text-[#fdfbf7]/50 text-xs tracking-[0.15em] mt-3 uppercase">Marquetería fina — España</p>
                </div>
                <span className="text-[#c89b3c] font-serif italic text-2xl">04</span>
              </div>
            </div>

          </div>

          {/* Call to Action */}
          <div className="mt-40 pt-20 border-t border-[#c89b3c]/10 flex flex-col items-center justify-center text-center">
            <h3 className="font-serif text-3xl md:text-4xl text-[#fdfbf7] mb-10">¿Buscas algo en <span className="italic text-[#c89b3c]">específico</span>?</h3>
            <button className="group relative px-12 py-5 bg-transparent border border-[#c89b3c]/50 text-[#fdfbf7] overflow-hidden hover:border-[#c89b3c] transition-colors duration-500">
              <span className="relative z-10 font-sans tracking-[0.2em] text-sm uppercase font-semibold">Explorar el Catálogo Completo</span>
              <div className="absolute inset-0 bg-[#c89b3c] transform scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100"></div>
              <span className="absolute inset-0 z-10 flex items-center justify-center font-sans tracking-[0.2em] text-sm uppercase font-semibold text-[#050505] opacity-0 transition-opacity duration-500 group-hover:opacity-100">Explorar el Catálogo Completo</span>
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="relative z-10 w-full bg-[#0a0a0a] py-32 px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 border-t border-[#c89b3c]/20">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Column: Info */}
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-8">
              <span className="h-px w-12 bg-[#c89b3c]"></span>
              <span className="text-[#c89b3c] uppercase tracking-[0.3em] text-xs font-semibold">
                Visítanos
              </span>
            </div>
            
            <h2 className="font-serif text-5xl md:text-6xl text-[#fdfbf7] mb-12 leading-tight">
              Tu próxima <span className="italic text-[#c89b3c] font-light">antigüedad</span> te espera.
            </h2>
            
            <div className="space-y-10">
              {/* Address */}
              <div className="group">
                <h4 className="text-[#fdfbf7] font-serif text-xl mb-3 flex items-center gap-3 group-hover:text-[#c89b3c] transition-colors">
                  <svg className="w-5 h-5 text-[#c89b3c]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  Nuestra Galería
                </h4>
                <p className="text-[#fdfbf7]/60 font-light text-base leading-relaxed pl-8">
                  C. 6 Sur 304 c, Los Sapos<br/>
                  72803 Heroica Puebla de Zaragoza, Pue.
                </p>
              </div>

              {/* Contact Info */}
              <div className="group">
                <h4 className="text-[#fdfbf7] font-serif text-xl mb-3 flex items-center gap-3 group-hover:text-[#c89b3c] transition-colors">
                  <svg className="w-5 h-5 text-[#c89b3c]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  Contacto
                </h4>
                <div className="text-[#fdfbf7]/60 font-light text-base space-y-2 pl-8">
                  <p className="hover:text-[#fdfbf7] transition-colors cursor-pointer">+52 (222) 348 1666</p>
                  <p className="hover:text-[#fdfbf7] transition-colors cursor-pointer">contacto@juarezantiguedades.mx</p>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h4 className="text-[#fdfbf7] font-serif text-xl mb-6 flex items-center gap-3">
                  <svg className="w-5 h-5 text-[#c89b3c]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                  Síguenos
                </h4>
                <div className="flex gap-4 pl-8">
                  {/* Instagram */}
                  <a href="#" className="w-12 h-12 rounded-full border border-[#fdfbf7]/20 flex items-center justify-center text-[#fdfbf7] hover:bg-[#c89b3c] hover:border-[#c89b3c] transition-all duration-300 transform hover:-translate-y-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                  </a>
                  {/* Facebook */}
                  <a href="#" className="w-12 h-12 rounded-full border border-[#fdfbf7]/20 flex items-center justify-center text-[#fdfbf7] hover:bg-[#c89b3c] hover:border-[#c89b3c] transition-all duration-300 transform hover:-translate-y-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                  </a>
                  {/* Pinterest */}
                  <a href="#" className="w-12 h-12 rounded-full border border-[#fdfbf7]/20 flex items-center justify-center text-[#fdfbf7] hover:bg-[#c89b3c] hover:border-[#c89b3c] transition-all duration-300 transform hover:-translate-y-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.163 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.625 0 12.017 0z"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Google Map */}
          <div className="w-full lg:w-7/12 min-h-[400px] lg:min-h-[500px] relative rounded-sm overflow-hidden border border-[#c89b3c]/20 group">
            <iframe 
              src="https://maps.google.com/maps?q=C.%206%20Sur%20304%20c,%20Los%20sapos,%2072803%20Puebla&t=&z=17&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 transition-transform duration-1000 group-hover:scale-105"
            ></iframe>
            
            {/* Elegant inner border overlay to cover iframe edges */}
            <div className="absolute inset-0 pointer-events-none border-[12px] border-[#0a0a0a] z-10 transition-colors duration-500 group-hover:border-[#0a0a0a]/50"></div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#050505] border-t border-[#c89b3c]/10 py-12 px-6 flex flex-col items-center justify-center">
        <div className="w-12 h-12 relative opacity-50 mb-6">
          <Image src="/Logo.jpg" alt="Logo mini" fill className="object-cover rounded-full mix-blend-screen" />
        </div>
        <p className="text-[#fdfbf7]/40 text-xs font-light tracking-[0.2em] uppercase text-center">
          &copy; {new Date().getFullYear()} Juarez Antigüedades. Todos los derechos reservados.<br className="md:hidden"/> <span className="hidden md:inline">|</span> Curaduría en Puebla.
        </p>
      </footer>
    </main>
  );
}
