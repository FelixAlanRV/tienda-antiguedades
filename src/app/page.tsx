import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Star, Clock, MapPin, Mail, ChevronDown, BookOpen, Sparkles, Phone, Menu, ScrollText, ArrowRight } from "lucide-react";

const Spotlight = ({ flip = false }: { flip?: boolean }) => (
  <div className={`absolute -bottom-10 z-30 hidden md:block opacity-70 pointer-events-none mix-blend-screen ${flip ? 'left-0 md:-left-48 -scale-x-100' : 'right-0 md:-right-48'}`}>
    <svg width="1000" height="400" viewBox="0 0 1000 400" className="text-[#a87b51] overflow-visible">
      <defs>
        <linearGradient id="beam-1" x1="1" y1="1" x2="0" y2="0.3">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.25" />
          <stop offset="40%" stopColor="#ffffff" stopOpacity="0.05" />
          <stop offset="100%" stopColor="transparent" stopOpacity="0" />
        </linearGradient>
        <filter id="glow-lamp">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      <polygon points="876,314 0,-900 0,500 861,346" fill="url(#beam-1)" />
      
      <g transform="translate(450, 185) scale(0.5)">
        <path d="M 870 380 L 930 380 L 910 375 L 890 375 Z" fill="#1a1a1a" />
        <rect x="897" y="320" width="6" height="60" fill="#1a1a1a" />
        <circle cx="900" cy="320" r="8" fill="#1a1a1a" />
        <circle cx="900" cy="320" r="3" fill="#333" />
        <g transform="rotate(-65 900 320)">
          <path d="M 865 320 C 865 345, 935 345, 935 320 Z" fill="#1a1a1a" />
          <rect x="865" y="250" width="70" height="70" fill="#1a1a1a" />
          <rect x="875" y="250" width="8" height="70" fill="#2a2a2a" />
          <rect x="863" y="248" width="74" height="4" rx="1" fill="#a87b51" />
          <ellipse cx="900" cy="250" rx="35" ry="4" fill="#fdfbf7" filter="url(#glow-lamp)" className="opacity-90" />
          <ellipse cx="900" cy="250" rx="20" ry="2" fill="#ffffff" />
        </g>
      </g>
    </svg>
  </div>
);

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] font-sans">
      {/* Hero Wrapper - Keeps the background image contained to the first screen */}
      <section id="inicio" className="relative min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Background Image Container */}
      {/* The image acts as the background, positioned absolutely to cover the screen.
          We aren't adding an overlay because the left side is naturally black. */}
      <div className="absolute inset-0 z-0 bg-black overflow-hidden">
        <Image
          src="/bg-hero-section.png"
          alt="Fachada de El Candelabro Antigüedades de noche"
          fill
          priority
          className="object-cover opacity-60 md:opacity-80"
          style={{ objectPosition: '70% center' }}
        />
        {/* Gradient Overlay for Text Readability - Fades left to right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/90 to-transparent w-[80%] md:w-[60%] lg:w-[50%]"></div>
        {/* Gradient Overlay for Smooth Section Transition - Fades bottom to top */}
        <div className="absolute inset-x-0 bottom-0 h-32 md:h-64 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
        
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
      <section className="relative z-10 flex-1 flex flex-col justify-center pt-20 md:pt-24 px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 w-full">
        {/* We constrain the text to the left half (max-w-xl) to live inside the black fade */}
        <div className="max-w-xl lg:max-w-2xl w-full monitor-expand-container transition-all duration-500">
          
          {/* Eyebrow / Kicker */}
          <div className="flex items-center gap-4 mb-6 md:mb-8 animate-fade-in-right" style={{ animationDelay: '0.2s' }}>
            <span className="h-px w-10 bg-[#a87b51]"></span>
            <span className="text-[#a87b51] uppercase tracking-[0.25em] text-[11px] md:text-xs font-semibold font-mono">
              Muebles, decoración y curiosidades
            </span>
          </div>
          
          {/* Headline - Brutalist / Modernist Treatment */}
          <h1 className="font-sans font-medium text-[3.5rem] md:text-[4.8rem] lg:text-[5.2rem] leading-[0.95] text-[#fdfbf7] mb-8 tracking-tighter uppercase transition-all duration-500 monitor-headline animate-fade-in-right" style={{ animationDelay: '0.3s' }}>
            JUAREZ <br />
            <span className="text-[#a87b51] font-light lowercase tracking-tight text-[3rem] md:text-[4.2rem] lg:text-[4.5rem] transition-all duration-500 monitor-subtitle text-glow-bright">antig<span className="animate-neon-flicker inline-block">ü</span>ed<span className="animate-neon-flicker inline-block" style={{ animationDelay: '1.2s' }}>ad</span>es</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-[#fdfbf7]/70 text-lg md:text-xl font-light max-w-md md:max-w-lg lg:max-w-xl mb-8 leading-relaxed transition-all duration-500 text-balance animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            Descubre piezas únicas con historia. Un rincón donde el pasado cobra vida y cada objeto tiene un secreto que contar.
          </p>

          {/* Animated Decorative Elements - Balanced / Intermediate */}
          <div className="flex items-center gap-8 mb-12 opacity-80 mix-blend-screen">
            {/* Minimalist Pendulum Clock */}
            <div className="relative flex flex-col items-center justify-center w-16 h-16 md:w-[72px] md:h-[72px] transition-transform hover:scale-105 duration-500">
              <svg width="100%" height="100%" viewBox="0 0 100 100" className="text-[#a87b51] overflow-visible">
                <style>{`
                  @keyframes swing-mid {
                    0%, 100% { transform: rotate(-12deg); }
                    50% { transform: rotate(12deg); }
                  }
                  .anim-pendulum-mid {
                    transform-origin: 50px 36px;
                    animation: swing-mid 3s ease-in-out infinite;
                  }
                `}</style>
                
                {/* Main Body */}
                <path d="M 20 14 L 80 14 L 80 92 L 20 92 Z" fill="none" stroke="currentColor" strokeWidth="6" className="opacity-70" />
                <path d="M 20 14 L 80 14 L 80 92 L 20 92 Z" fill="#fdfbf7" className="opacity-5" />
                
                {/* Imperial Stepped Top */}
                {/* Top Tier */}
                <rect x="32" y="2" width="36" height="4" fill="none" stroke="currentColor" strokeWidth="5" className="opacity-80" />
                <rect x="32" y="2" width="36" height="4" fill="#fdfbf7" className="opacity-5" />
                {/* Middle Tier */}
                <rect x="24" y="6" width="52" height="4" fill="none" stroke="currentColor" strokeWidth="5" className="opacity-80" />
                <rect x="24" y="6" width="52" height="4" fill="#fdfbf7" className="opacity-5" />
                {/* Bottom Tier (Cornice) */}
                <rect x="15" y="10" width="70" height="4" fill="currentColor" className="opacity-80" />
                
                {/* Finials (Corner spires) */}
                <polygon points="20,6 24,-4 28,6" fill="currentColor" className="opacity-90" />
                <polygon points="72,6 76,-4 80,6" fill="currentColor" className="opacity-90" />
                
                {/* Base Plinth */}
                <rect x="15" y="92" width="70" height="4" fill="currentColor" className="opacity-90" />
                <rect x="18" y="96" width="64" height="2" fill="currentColor" className="opacity-60" />
                
                {/* Dial / Clock Face */}
                <circle cx="50" cy="36" r="13" fill="none" stroke="currentColor" strokeWidth="5" className="opacity-80" />
                <circle cx="50" cy="36" r="4" fill="currentColor" />
                {/* Hands */}
                <line x1="50" y1="36" x2="50" y2="26" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                <line x1="50" y1="36" x2="57" y2="36" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                
                {/* Swinging Body (Pendulum) */}
                <g className="anim-pendulum-mid">
                  <line x1="50" y1="36" x2="50" y2="80" stroke="currentColor" strokeWidth="6" />
                  <circle cx="50" cy="80" r="11" fill="currentColor" />
                  <circle cx="50" cy="80" r="5" fill="#000" className="mix-blend-overlay opacity-30" />
                </g>
              </svg>
            </div>

            {/* NEW: Antique Candelabra (Center) */}
            <div className="relative flex flex-col items-center justify-center w-16 h-16 md:w-[72px] md:h-[72px] transition-transform hover:scale-105 duration-500">
              <svg width="100%" height="100%" viewBox="0 0 100 100" className="text-[#a87b51] overflow-visible">
                <style>{`
                  @keyframes flicker-mid {
                    0%, 100% { transform: scale(1, 1) rotate(0deg); opacity: 0.9; }
                    25% { transform: scale(0.9, 1.2) rotate(-2deg); opacity: 1; }
                    50% { transform: scale(1.1, 0.9) rotate(2deg); opacity: 0.7; }
                    75% { transform: scale(0.95, 1.1) rotate(1deg); opacity: 0.8; }
                  }
                  .flame-center { transform-origin: 50px 19px; animation: flicker-mid 0.8s ease-in-out infinite alternate; }
                  .flame-left { transform-origin: 20px 29px; animation: flicker-mid 0.9s ease-in-out infinite alternate-reverse; }
                  .flame-right { transform-origin: 80px 29px; animation: flicker-mid 1s ease-in-out infinite alternate; }
                `}</style>
                
                <g>
                  {/* Base (Matches Hourglass) */}
                  <rect x="22" y="94" width="56" height="4" rx="1" fill="currentColor" />
                  <polygon points="31,91 69,91 73,94 27,94" fill="currentColor" className="opacity-90" />

                  {/* Arms */}
                  <path d="M 20 50 C 20 75, 50 75, 50 75" fill="none" stroke="currentColor" strokeWidth="6" className="opacity-70" />
                  <path d="M 80 50 C 80 75, 50 75, 50 75" fill="none" stroke="currentColor" strokeWidth="6" className="opacity-70" />
                  
                  {/* Stem (Drawn over arms) */}
                  <line x1="50" y1="91" x2="50" y2="40" stroke="currentColor" strokeWidth="6" strokeLinecap="round" className="opacity-90" />
                  
                  {/* Candle Holders (Cups) */}
                  <line x1="42" y1="40" x2="58" y2="40" stroke="currentColor" strokeWidth="6" strokeLinecap="round" className="opacity-90" />
                  <line x1="12" y1="50" x2="28" y2="50" stroke="currentColor" strokeWidth="6" strokeLinecap="round" className="opacity-90" />
                  <line x1="72" y1="50" x2="88" y2="50" stroke="currentColor" strokeWidth="6" strokeLinecap="round" className="opacity-90" />
                  
                  {/* Candles */}
                  <line x1="50" y1="40" x2="50" y2="20" stroke="currentColor" strokeWidth="6" strokeLinecap="round" className="opacity-80" />
                  <line x1="20" y1="50" x2="20" y2="30" stroke="currentColor" strokeWidth="6" strokeLinecap="round" className="opacity-80" />
                  <line x1="80" y1="50" x2="80" y2="30" stroke="currentColor" strokeWidth="6" strokeLinecap="round" className="opacity-80" />
                  
                  {/* Flames (Animated) */}
                  <path d="M 50 -3 C 45 5, 40 10, 40 14 C 40 20, 45 24, 50 24 C 55 24, 60 20, 60 14 C 60 10, 55 5, 50 -3 Z" fill="currentColor" className="flame-center" />
                  <path d="M 20 7 C 15 15, 10 20, 10 24 C 10 30, 15 34, 20 34 C 25 34, 30 30, 30 24 C 30 20, 25 15, 20 7 Z" fill="currentColor" className="flame-left" />
                  <path d="M 80 7 C 75 15, 70 20, 70 24 C 70 30, 75 34, 80 34 C 85 34, 90 30, 90 24 C 90 20, 85 15, 80 7 Z" fill="currentColor" className="flame-right" />
                </g>
              </svg>
            </div>

            {/* Intermediate Hourglass */}
            <div className="relative flex flex-col items-center justify-center w-16 h-16 md:w-[72px] md:h-[72px] transition-transform hover:scale-105 duration-500">
              <svg width="100%" height="100%" viewBox="0 0 100 100" className="text-[#a87b51] overflow-visible">
                <style>{`
                  @keyframes flip-mid {
                    0%, 40% { transform: rotate(0deg); }
                    50% { transform: rotate(180deg); }
                    50.01%, 90% { transform: rotate(0deg); }
                    100% { transform: rotate(180deg); }
                  }
                  @keyframes sand-level-top-mid {
                    0% { transform: scaleY(1); opacity: 0.9; }
                    40%, 50% { transform: scaleY(0); opacity: 0; }
                    50.01% { transform: scaleY(1); opacity: 0.9; }
                    90%, 100% { transform: scaleY(0); opacity: 0; }
                  }
                  @keyframes sand-level-bot-mid {
                    0% { transform: scaleY(0); opacity: 0; }
                    40%, 50% { transform: scaleY(1); opacity: 0.9; }
                    50.01% { transform: scaleY(0); opacity: 0; }
                    90%, 100% { transform: scaleY(1); opacity: 0.9; }
                  }
                  @keyframes sand-stream-mid {
                    0% { stroke-dashoffset: 0; opacity: 1; }
                    40% { stroke-dashoffset: 24; opacity: 1; }
                    40.01%, 50% { opacity: 0; }
                    50.01% { stroke-dashoffset: 0; opacity: 1; }
                    90% { stroke-dashoffset: 24; opacity: 1; }
                    90.01%, 100% { opacity: 0; }
                  }
                  .anim-hourglass-mid { transform-origin: 50px 52px; animation: flip-mid 6s cubic-bezier(0.5, 0, 0.2, 1) infinite; }
                  .sand-top-mid { transform-origin: 50px 50px; animation: sand-level-top-mid 6s linear infinite; }
                  .sand-bot-mid { transform-origin: 50px 86px; animation: sand-level-bot-mid 6s linear infinite; }
                  .falling-sand-mid { stroke-dasharray: 2 4; animation: sand-stream-mid 6s linear infinite; }
                `}</style>
                
                <g className="anim-hourglass-mid">
                  {/* Caps (Solid blocks) */}
                  <rect x="18" y="6" width="64" height="4" rx="1" fill="currentColor" />
                  <rect x="18" y="94" width="64" height="4" rx="1" fill="currentColor" />
                  
                  {/* Pyramidal Steps */}
                  <polygon points="23,10 77,10 73,14 27,14" fill="currentColor" className="opacity-90" />
                  <polygon points="27,90 73,90 77,94 23,94" fill="currentColor" className="opacity-90" />

                  {/* Pillars */}
                  <line x1="21" y1="10" x2="21" y2="94" stroke="currentColor" strokeWidth="6" className="opacity-50" />
                  <line x1="79" y1="10" x2="79" y2="94" stroke="currentColor" strokeWidth="6" className="opacity-50" />
                  
                  {/* Very subtle glass fill for depth */}
                  <path d="M 27 14 C 27 40, 43 49, 50 52 C 57 49, 73 40, 73 14 Z" fill="#fdfbf7" className="opacity-5" />
                  <path d="M 27 90 C 27 64, 43 55, 50 52 C 57 55, 73 64, 73 90 Z" fill="#fdfbf7" className="opacity-5" />
                  
                  {/* Glass Outlines */}
                  <path d="M 27 14 C 27 40, 43 49, 50 52 C 43 55, 27 64, 27 90" fill="none" stroke="currentColor" strokeWidth="5" className="opacity-80" />
                  <path d="M 73 14 C 73 40, 57 49, 50 52 C 57 55, 73 64, 73 90" fill="none" stroke="currentColor" strokeWidth="5" className="opacity-80" />
                  
                  {/* Sand Piles (Animated) */}
                  <g className="sand-top-mid">
                    <path d="M 28 18 L 72 18 L 50 50 Z" fill="currentColor" />
                  </g>
                  <g className="sand-bot-mid">
                    <path d="M 28 86 L 72 86 L 50 54 Z" fill="currentColor" />
                  </g>
                  
                  {/* Falling Sand */}
                  <line x1="50" y1="50" x2="50" y2="82" stroke="currentColor" strokeWidth="5" className="falling-sand-mid" />
                </g>
              </svg>
            </div>
          </div>
          
          {/* CTA */}
          <button className="group relative px-8 md:px-10 py-4 mt-6 border border-[#fdfbf7]/20 bg-transparent overflow-hidden rounded-full z-0 transition-colors duration-500 hover:duration-300 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
            {/* Wave fill sliding in on hover from Event-Venue-Page */}
            <div className="absolute block h-[200%] w-[140%] rounded-full bg-[#a87b51] -z-10 top-[100%] left-[30%] transition-all duration-500 group-hover:top-[-35%] group-hover:left-[-20%]"></div>
            
            <div className="relative z-10 flex items-center gap-6">
              <span className="font-sans tracking-[0.2em] text-xs md:text-sm uppercase font-bold text-[#fdfbf7] transition-colors duration-500">
                Explorar la colección
              </span>
              <svg 
                className="w-4 h-4 text-[#a87b51] group-hover:text-[#fdfbf7] transform transition-all duration-500 group-hover:translate-x-2" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </button>
        </div>
      </section>
      </section> {/* End Hero Wrapper */}

      {/* Sección Historia / Quiénes Somos */}
      <section id="historia" className="relative z-20 w-full bg-black pt-56 md:pt-72 pb-24 md:pb-32 px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 flex flex-col md:flex-row items-center gap-16 md:gap-24 overflow-hidden">
        
        {/* Background Decorative Icons */}
        <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-start">
          <ScrollText className="w-[50rem] h-[50rem] text-[#fdfbf7] opacity-[0.07] -rotate-12 translate-x-0 md:translate-x-8 translate-y-12" />
        </div>

        {/* Left Side: Logo Grande */}
        <div className="w-full md:w-1/2 flex justify-center py-12 relative z-10 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          {/* Wrapping container for the frames and logo */}
          <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 monitor-historia-logo flex items-center justify-center group">
            
            {/* Glass Rotated Frame */}
            <div className="absolute inset-[-25px] md:inset-[-48px] monitor-historia-frame bg-[#fdfbf7]/5 border border-[#fdfbf7]/5 shadow-[0_15px_35px_rgba(0,0,0,0.5)] backdrop-blur-md rounded-3xl rotate-3 lg:rotate-6 transition-transform duration-700 z-0"></div>

            {/* Logo Container (Circle) */}
            <div className="relative w-full h-full rounded-full overflow-hidden border border-[#a87b51]/40 z-10 transition-transform duration-700 group-hover:scale-105">
              <Image 
                src="/Logo.jpg" 
                alt="Logo Juarez Antigüedades Grande" 
                fill 
                className="object-cover grayscale transition-all duration-700"
              />
            </div>
            
          </div>
        </div>

        {/* Right Side: Copy */}
        <div className="w-full md:w-1/2 flex flex-col items-start text-left">
          <div className="flex items-center gap-4 mb-6 animate-fade-in-right" style={{ animationDelay: '0.2s' }}>
            <span className="h-px w-10 bg-[#a87b51]"></span>
            <span className="text-[#a87b51] uppercase tracking-[0.25em] text-[11px] md:text-xs font-semibold font-mono">
              Nuestra Historia
            </span>
          </div>
          
          <h2 className="font-sans font-medium text-[3rem] md:text-[4.2rem] lg:text-[4.5rem] leading-[0.95] text-[#fdfbf7] mb-8 tracking-tighter monitor-historia-title transition-all duration-500 animate-fade-in-right" style={{ animationDelay: '0.4s' }}>
            ¿Quiénes <span className="text-[#a87b51] font-light lowercase tracking-tight italic text-glow-bright monitor-historia-cursive transition-all duration-500">s<span className="animate-neon-flicker inline-block">o</span>m<span className="animate-neon-flicker inline-block" style={{ animationDelay: '1.2s' }}>o</span>s?</span>
          </h2>
          
          <div className="text-[#fdfbf7]/60 text-base md:text-lg font-light leading-relaxed space-y-6 max-w-xl transition-all duration-500 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <p>
              En Juarez Antigüedades, nos dedicamos a la incansable búsqueda de la belleza atemporal. Más que una tienda, somos un refugio para aquellos objetos que han desafiado el paso del tiempo, conservando en cada desgaste y en cada textura la esencia de épocas pasadas.
            </p>
            <p>
              Nuestro catálogo es una curaduría meticulosa de muebles con carácter, arte clásico y curiosidades. Creemos fielmente en que una antigüedad no es solo decoración, sino una obra maestra artesanal lista para escribir un nuevo capítulo en los espacios contemporáneos.
            </p>
          </div>
        </div>
      </section>

      {/* ----------------- COLECCIÓN SELECTA ----------------- */}
      <section id="coleccion" className="relative w-full bg-black pt-24 md:pt-32 pb-24 md:pb-32 px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 z-10 overflow-hidden">
        
        {/* Marcos Laterales (Architectural Frames) */}
        <div className="absolute inset-y-0 left-4 md:left-12 w-px bg-gradient-to-b from-black via-[#fdfbf7]/15 to-black pointer-events-none z-0 hidden sm:block"></div>
        <div className="absolute inset-y-0 right-4 md:right-12 w-px bg-gradient-to-b from-black via-[#fdfbf7]/15 to-black pointer-events-none z-0 hidden sm:block"></div>

        {/* Encabezado de la Sección */}
        <div className="w-full flex flex-col items-center justify-center text-center mb-24 md:mb-32 relative z-10">
          <div className="flex items-center gap-4 mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <span className="h-px w-10 bg-[#a87b51]"></span>
            <span className="text-[#a87b51] uppercase tracking-[0.3em] text-xs md:text-sm font-semibold">Exhibición</span>
            <span className="h-px w-10 bg-[#a87b51]"></span>
          </div>
          <h2 className="font-sans font-medium text-[3rem] md:text-[4.2rem] lg:text-[4.5rem] leading-[0.95] text-[#fdfbf7] tracking-tighter monitor-historia-title transition-all duration-500 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Piezas <span className="text-[#a87b51] font-light lowercase tracking-tight italic monitor-historia-cursive transition-all duration-500 text-glow-bright">d<span className="animate-neon-flicker inline-block">e</span>stac<span className="animate-neon-flicker inline-block" style={{ animationDelay: '1.2s' }}>a</span>das</span>
          </h2>
        </div>

        {/* Grid Zig-Zag de Productos */}
        <div className="flex flex-col gap-32 md:gap-40 max-w-7xl mx-auto relative z-10">
          
          {/* Item 1 */}
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24 group relative animate-fade-in-right" style={{ animationDelay: '0.6s' }}>
            <div className="absolute -top-4 md:-top-6 right-0 md:right-8 text-[4rem] md:text-[5.5rem] font-sans font-bold text-[#fdfbf7]/15 select-none z-0 pointer-events-none leading-none">1972</div>
            
            <Spotlight flip />
            <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">
              <div className="relative w-56 h-72 md:w-72 md:h-[24rem] lg:w-80 lg:h-[26rem] flex items-center justify-center">
                

                {/* Glass Frame */}
                <div className="absolute inset-[-15px] md:inset-[-30px] bg-[#fdfbf7]/5 border border-[#fdfbf7]/5 shadow-[0_15px_35px_rgba(0,0,0,0.5)] backdrop-blur-md rounded-2xl rotate-3 transition-transform duration-700 z-0"></div>
                
                {/* Image */}
                <div className="relative w-full h-full rounded-xl overflow-hidden border border-[#a87b51]/30 z-10 transition-transform duration-700 hover:scale-105">
                  <Image src="/Anitguedad 1.png" alt="Pieza de Colección 1" fill className="object-cover transition-all duration-700" />
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-start text-left relative">
              <div className="relative inline-flex items-center justify-center mb-4 z-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-12 bg-amber-500/20 blur-xl rounded-full z-[-1] animate-pulse" style={{ animationDuration: '4s' }}></div>
                <span className="text-[10px] md:text-xs font-sans font-bold tracking-[0.2em] text-amber-400">
                  Disponible
                </span>
              </div>
              <h3 className="font-sans text-3xl md:text-4xl text-[#fdfbf7] mb-4 tracking-widest font-light relative z-10">Figura <span className="text-[#a87b51] font-medium italic lowercase">porcelana</span></h3>
              <p className="text-[#fdfbf7]/60 text-base md:text-lg font-light leading-relaxed max-w-sm mb-6">
                Elegante escultura de porcelana finamente detallada. Sus delicados rasgos y su impecable acabado en blanco inmaculado la convierten en una pieza de verdadera realeza.
              </p>
              <div className="font-sans text-[#a87b51] font-medium text-xl md:text-2xl tracking-widest relative z-10">
                $2,500 <span className="text-xs font-light text-[#fdfbf7]/50 ml-1">MXN</span>
              </div>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-24 group relative animate-fade-in-left" style={{ animationDelay: '0.8s' }}>
            <div className="absolute -top-4 md:-top-6 left-0 md:left-8 text-[4rem] md:text-[5.5rem] font-sans font-bold text-[#fdfbf7]/15 select-none z-0 pointer-events-none leading-none">1985</div>
            <Spotlight />
            <div className="w-full md:w-1/2 flex justify-center md:justify-start relative">
              <div className="relative w-56 h-72 md:w-72 md:h-[24rem] lg:w-80 lg:h-[26rem] flex items-center justify-center">
                

                <div className="absolute inset-[-15px] md:inset-[-30px] bg-[#fdfbf7]/5 border border-[#fdfbf7]/5 shadow-[0_15px_35px_rgba(0,0,0,0.5)] backdrop-blur-md rounded-2xl -rotate-3 transition-transform duration-700 z-0"></div>
                
                <div className="relative w-full h-full rounded-xl overflow-hidden border border-[#a87b51]/30 z-10 transition-transform duration-700 hover:scale-105">
                  <Image src="/Anitiguedad 2.png" alt="Pieza de Colección 2" fill className="object-cover transition-all duration-700" />
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-start md:items-end text-left md:text-right relative">
              <div className="relative inline-flex items-center justify-center mb-4 z-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-12 bg-amber-500/20 blur-xl rounded-full z-[-1] animate-pulse" style={{ animationDuration: '4s' }}></div>
                <span className="text-[10px] md:text-xs font-sans font-bold tracking-[0.2em] text-amber-400">
                  Disponible
                </span>
              </div>
              <h3 className="font-sans text-3xl md:text-4xl text-[#fdfbf7] mb-4 tracking-widest font-light relative z-10">Estatua <span className="text-[#a87b51] font-medium italic lowercase">bronce</span></h3>
              <p className="text-[#fdfbf7]/60 text-base md:text-lg font-light leading-relaxed max-w-sm mb-6">
                Imponente escultura de bronce representando una figura femenina con vestimenta de época, ideal para adornar patios y jardines aportando un toque clásico y distinguido.
              </p>
              <div className="font-sans text-[#a87b51] font-medium text-xl md:text-2xl tracking-widest relative z-10">
                $3,200 <span className="text-xs font-light text-[#fdfbf7]/50 ml-1">MXN</span>
              </div>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24 group relative animate-fade-in-right" style={{ animationDelay: '1.0s' }}>
            <div className="absolute -top-4 md:-top-6 right-0 md:right-8 text-[4rem] md:text-[5.5rem] font-sans font-bold text-[#fdfbf7]/15 select-none z-0 pointer-events-none leading-none">1978</div>
            <Spotlight flip />
            <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">
              <div className="relative w-56 h-72 md:w-72 md:h-[24rem] lg:w-80 lg:h-[26rem] flex items-center justify-center">
                

                <div className="absolute inset-[-15px] md:inset-[-30px] bg-[#fdfbf7]/5 border border-[#fdfbf7]/5 shadow-[0_15px_35px_rgba(0,0,0,0.5)] backdrop-blur-md rounded-2xl rotate-2 transition-transform duration-700 z-0"></div>
                
                <div className="relative w-full h-full rounded-xl overflow-hidden border border-[#a87b51]/30 z-10 transition-transform duration-700 hover:scale-105">
                  <Image src="/Antiguedad 3.png" alt="Pieza de Colección 3" fill className="object-cover transition-all duration-700" />
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-start text-left relative">
              <div className="relative inline-flex items-center justify-center mb-4 z-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-12 bg-amber-500/20 blur-xl rounded-full z-[-1] animate-pulse" style={{ animationDuration: '4s' }}></div>
                <span className="text-[10px] md:text-xs font-sans font-bold tracking-[0.2em] text-amber-400">
                  Disponible
                </span>
              </div>
              <h3 className="font-sans text-3xl md:text-4xl text-[#fdfbf7] mb-4 tracking-widest font-light relative z-10">Lámpara <span className="text-[#a87b51] font-medium italic lowercase">latón</span></h3>
              <p className="text-[#fdfbf7]/60 text-base md:text-lg font-light leading-relaxed max-w-sm mb-6">
                Hermosa lámpara de latón con doble pantalla de cristal opalino. Su intrincado diseño y cálida iluminación la convierten en el centro de atención de cualquier estancia.
              </p>
              <div className="font-sans text-[#a87b51] font-medium text-xl md:text-2xl tracking-widest relative z-10">
                $3,450 <span className="text-xs font-light text-[#fdfbf7]/50 ml-1">MXN</span>
              </div>
            </div>
          </div>

          {/* Item 4 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-24 group relative animate-fade-in-left" style={{ animationDelay: '1.2s' }}>
            <div className="absolute -top-4 md:-top-6 left-0 md:left-8 text-[4rem] md:text-[5.5rem] font-sans font-bold text-[#fdfbf7]/15 select-none z-0 pointer-events-none leading-none">1990</div>
            <Spotlight />
            <div className="w-full md:w-1/2 flex justify-center md:justify-start relative">
              <div className="relative w-56 h-72 md:w-72 md:h-[24rem] lg:w-80 lg:h-[26rem] flex items-center justify-center">
                

                <div className="absolute inset-[-15px] md:inset-[-30px] bg-[#fdfbf7]/5 border border-[#fdfbf7]/5 shadow-[0_15px_35px_rgba(0,0,0,0.5)] backdrop-blur-md rounded-2xl -rotate-2 transition-transform duration-700 z-0"></div>
                
                <div className="relative w-full h-full rounded-xl overflow-hidden border border-[#a87b51]/30 z-10 transition-transform duration-700 hover:scale-105">
                  <Image src="/Antiguedad 4.png" alt="Pieza de Colección 4" fill className="object-cover transition-all duration-700" />
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-start md:items-end text-left md:text-right relative">
              <div className="relative inline-flex items-center justify-center mb-4 z-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-12 bg-red-500/20 blur-xl rounded-full z-[-1] animate-pulse" style={{ animationDuration: '4s' }}></div>
                <span className="text-[10px] md:text-xs font-sans font-bold tracking-[0.2em] text-red-500">
                  Vendida
                </span>
              </div>
              <h3 className="font-sans text-3xl md:text-4xl text-[#fdfbf7] mb-4 tracking-widest font-light relative z-10">Antiguo <span className="text-[#a87b51] font-medium italic lowercase">aparador</span></h3>
              <p className="text-[#fdfbf7]/60 text-base md:text-lg font-light leading-relaxed max-w-sm mb-6">
                Imponente mueble de madera tallada con cubierta de mármol y finos detalles ornamentales. Una pieza robusta que aporta carácter y suma elegancia a cualquier comedor clásico.
              </p>
              <div className="font-sans text-[#a87b51] font-medium text-xl md:text-2xl tracking-widest relative z-10">
                $2,800 <span className="text-xs font-light text-[#fdfbf7]/50 ml-1">MXN</span>
              </div>
            </div>
          </div>
          
          {/* Botón Ver Todos */}
          <div className="flex justify-center mt-12 md:mt-16 w-full relative z-10 animate-fade-in-up" style={{ animationDelay: '1.4s' }}>
            <Link href="/catalogo">
              <button className="group relative px-8 md:px-10 py-4 border border-[#fdfbf7]/20 bg-transparent overflow-hidden rounded-full z-0 transition-colors duration-500 hover:duration-300">
                <div className="absolute block h-[200%] w-[140%] rounded-full bg-[#a87b51] -z-10 top-[100%] left-[30%] transition-all duration-500 group-hover:top-[-35%] group-hover:left-[-20%]"></div>
                
                <div className="relative z-10 flex items-center gap-6">
                  <span className="font-sans tracking-[0.2em] text-xs md:text-sm uppercase font-bold text-[#fdfbf7] transition-colors duration-500">
                    Ver catálogo completo
                  </span>
                  <svg 
                    className="w-4 h-4 text-[#a87b51] group-hover:text-[#fdfbf7] transform transition-all duration-500 group-hover:translate-x-2" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ----------------- CONTACTO / FOOTER ----------------- */}
      <section id="contacto" className="relative w-full bg-black pt-16 md:pt-20 pb-8 px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 z-20 overflow-hidden">
        
        {/* Background glow effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#a87b51]/5 blur-[100px] pointer-events-none rounded-full"></div>

        <div className="max-w-7xl mx-auto flex flex-col relative z-10">
          
          {/* Section Header */}
          <div className="flex flex-col items-start md:items-center md:text-center mb-10 md:mb-16 w-full">
            <div className="flex items-center gap-4 mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <span className="h-px w-8 md:w-12 bg-[#a87b51] hidden md:block"></span>
              <span className="text-[#a87b51] uppercase tracking-[0.3em] text-xs md:text-sm font-semibold">El final de la búsqueda</span>
              <span className="h-px w-8 md:w-12 bg-[#a87b51]"></span>
            </div>
            
            <h2 className="font-sans font-medium text-[3rem] md:text-[4.2rem] lg:text-[4.5rem] leading-[0.95] text-[#fdfbf7] tracking-tighter monitor-historia-title transition-all duration-500 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              Encuén<span className="text-[#a87b51] font-light lowercase tracking-tight italic monitor-historia-cursive text-glow-bright">tr<span className="animate-neon-flicker inline-block">a</span>n<span className="animate-neon-flicker inline-block" style={{ animationDelay: '1.2s' }}>o</span>s</span>
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-full">
            
            {/* Ubicación Card */}
            <div className="group relative flex flex-col p-8 md:p-10 rounded-2xl bg-white/[0.03] border border-[#fdfbf7]/10 shadow-[0_10px_40px_rgba(0,0,0,0.5)] backdrop-blur-md overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-[#a87b51]/40 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#a87b51]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#1a1a1a] border border-[#fdfbf7]/10 group-hover:bg-[#a87b51]/10 group-hover:border-[#a87b51]/30 transition-colors duration-500">
                <MapPin className="w-5 h-5 text-[#a87b51]" />
              </div>
              
              <h3 className="text-[#fdfbf7] text-xl font-sans tracking-widest font-light mb-4 uppercase">Ubicación</h3>
              <p className="text-[#fdfbf7]/60 font-light leading-relaxed text-sm md:text-base mb-4">
                C. 6 Sur 304 c, Los sapos<br />
                72803 Heroica Puebla de Zaragoza<br />
                Pue.
              </p>
              <a href="#" className="mt-auto inline-flex items-center gap-2 text-[#a87b51] text-sm uppercase tracking-widest font-semibold hover:text-[#fdfbf7] transition-colors duration-300">
                Ver en mapa <span className="text-lg leading-none">→</span>
              </a>
            </div>

            {/* Horario Card */}
            <div className="group relative flex flex-col p-8 md:p-10 rounded-2xl bg-white/[0.03] border border-[#fdfbf7]/10 shadow-[0_10px_40px_rgba(0,0,0,0.5)] backdrop-blur-md overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-[#a87b51]/40 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#a87b51]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#1a1a1a] border border-[#fdfbf7]/10 group-hover:bg-[#a87b51]/10 group-hover:border-[#a87b51]/30 transition-colors duration-500">
                <Clock className="w-5 h-5 text-[#a87b51]" />
              </div>
              
              <h3 className="text-[#fdfbf7] text-xl font-sans tracking-widest font-light mb-4 uppercase">Horario</h3>
              <ul className="text-[#fdfbf7]/60 font-light leading-relaxed text-sm md:text-base space-y-3">
                <li className="flex justify-between border-b border-[#fdfbf7]/5 pb-2">
                  <span>Martes - Viernes</span>
                  <span className="text-[#fdfbf7]">11:30 a.m. - 6:30 p.m.</span>
                </li>
                <li className="flex justify-between border-b border-[#fdfbf7]/5 pb-2">
                  <span>Sábado - Domingo</span>
                  <span className="text-[#fdfbf7]">11:00 a.m. - 6:30 p.m.</span>
                </li>
                <li className="flex justify-between pb-2">
                  <span>Lunes</span>
                  <span className="text-[#a87b51] italic">Cerrado</span>
                </li>
              </ul>
            </div>

            {/* Contacto Card */}
            <div className="group relative flex flex-col p-8 md:p-10 rounded-2xl bg-white/[0.03] border border-[#fdfbf7]/10 shadow-[0_10px_40px_rgba(0,0,0,0.5)] backdrop-blur-md overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-[#a87b51]/40 animate-fade-in-up" style={{ animationDelay: '1.0s' }}>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#a87b51]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#1a1a1a] border border-[#fdfbf7]/10 group-hover:bg-[#a87b51]/10 group-hover:border-[#a87b51]/30 transition-colors duration-500">
                <Mail className="w-5 h-5 text-[#a87b51]" />
              </div>
              
              <h3 className="text-[#fdfbf7] text-xl font-sans tracking-widest font-light mb-4 uppercase">Contacto</h3>
              <div className="text-[#fdfbf7]/60 font-light leading-relaxed text-sm md:text-base space-y-4">
                <a href="tel:+522223481666" className="flex items-center gap-3 hover:text-[#fdfbf7] transition-colors duration-300">
                  <Phone className="w-4 h-4 text-[#a87b51]" /> 222 348 1666
                </a>
                <a href="mailto:info@juarezantiguedades.mx" className="flex items-center gap-3 hover:text-[#fdfbf7] transition-colors duration-300">
                  <Mail className="w-4 h-4 text-[#a87b51]" /> info@juarezantiguedades.mx
                </a>
                <a href="#" className="flex items-center gap-3 hover:text-[#fdfbf7] transition-colors duration-300">
                  <svg className="w-4 h-4 text-[#a87b51]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg> @juarez_galeriadeantiguedades
                </a>
              </div>
            </div>

          </div>
          
          {/* Figura Animada Acorde al Tema (Llave Antigua) */}
          <div className="flex flex-col items-center justify-center mt-12 md:mt-16 cursor-default relative z-10 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
            <svg width="120" height="90" viewBox="0 0 120 90" className="text-[#a87b51] overflow-visible">
              <style>{`
                @keyframes hover-key {
                  0%, 100% { transform: translateY(0px) rotate(-4deg); }
                  50% { transform: translateY(-6px) rotate(4deg); }
                }
                @keyframes float-spark {
                  0% { opacity: 0; transform: translate(0, 0) scale(0.5); }
                  50% { opacity: 1; transform: translate(8px, -15px) scale(1.2); }
                  100% { opacity: 0; transform: translate(16px, -30px) scale(0.5); }
                }
                @keyframes float-spark-2 {
                  0% { opacity: 0; transform: translate(0, 0) scale(0.5); }
                  50% { opacity: 1; transform: translate(-8px, -15px) scale(1); }
                  100% { opacity: 0; transform: translate(-15px, -25px) scale(0.5); }
                }
                .anim-key { transform-origin: 60px 45px; animation: hover-key 4s infinite ease-in-out; }
                .anim-spark-1 { animation: float-spark 3s infinite linear; }
                .anim-spark-2 { animation: float-spark-2 4s infinite linear 1.5s; }
                .anim-spark-3 { animation: float-spark 3.5s infinite linear 0.7s; }
              `}</style>
              
              {/* Floor */}
              <line x1="20" y1="85" x2="100" y2="85" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="opacity-20" />
              
              <g className="anim-key">
                {/* Key Bow (Head) */}
                <circle cx="35" cy="45" r="10" fill="none" stroke="currentColor" strokeWidth="2.5" className="opacity-90" />
                <path d="M 35 35 C 25 35, 25 55, 35 55 C 45 55, 45 35, 35 35 Z" fill="none" stroke="currentColor" strokeWidth="1" className="opacity-40" />
                <circle cx="35" cy="45" r="3" fill="none" stroke="currentColor" strokeWidth="1.5" className="opacity-80" />
                
                {/* Key Stem */}
                <line x1="45" y1="45" x2="85" y2="45" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="opacity-90" />
                
                {/* Key Wards (Teeth) */}
                <path d="M 75 45 L 75 55 L 80 55 L 80 50 L 85 50 L 85 55 L 90 55 L 90 45" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" className="opacity-90" />
                <path d="M 78 50 L 78 52" stroke="currentColor" strokeWidth="1" className="opacity-50" />
              </g>

              {/* Floating Sparkles (Magic/Dust) */}
              <text x="75" y="40" fontSize="10" fill="#f5d76e" className="anim-spark-1 opacity-0">✦</text>
              <text x="35" y="30" fontSize="12" fill="#fdfbf7" className="anim-spark-2 opacity-0">✦</text>
              <text x="85" y="45" fontSize="8" fill="#a87b51" className="anim-spark-3 opacity-0">✦</text>
            </svg>
            <span className="font-mono text-[10px] md:text-xs text-[#fdfbf7]/40 mt-4 animate-pulse tracking-[0.3em] uppercase">
              descubriendo tesoros
            </span>
          </div>

          {/* Footer bottom */}
          <div className="relative mt-12 md:mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[#fdfbf7]/40 text-xs font-light">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-[#a87b51]/40 to-transparent"></div>
            <p>© 2026 Juarez Antigüedades. Todos los derechos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#a87b51] transition-colors duration-300">Términos</a>
              <a href="#" className="hover:text-[#a87b51] transition-colors duration-300">Privacidad</a>
            </div>
          </div>
          
        </div>
      </section>
    </main>
  );
}
