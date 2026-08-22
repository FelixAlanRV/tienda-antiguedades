"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Header } from "@/components/Header";
import { Lock, Eye, EyeOff } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function AdminPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setError(error.message);
      } else {
        router.push("/catalogo");
      }
    } catch (err) {
      setError("Error de red");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] font-sans flex flex-col">
      <Header />
      
      <div className="flex-1 flex items-center justify-center px-4 pt-24">
        <div className="w-full max-w-md bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
          {/* Decorative glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-[#a87b51]/20 blur-[50px] rounded-full pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-[#a87b51]/20 flex items-center justify-center mb-6 border border-[#a87b51]/30">
              <Lock className="w-5 h-5 text-[#a87b51]" />
            </div>
            
            <h1 className="text-xl font-serif text-[#fdfbf7] mb-2 text-center">Acceso Administrativo</h1>
            <p className="text-sm text-[#fdfbf7]/50 mb-8 text-center font-light">
              Ingresa la clave maestra para gestionar el catálogo
            </p>

            <form onSubmit={handleLogin} className="w-full space-y-4">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Correo electrónico"
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-[#fdfbf7] placeholder:text-[#fdfbf7]/30 focus:outline-none focus:border-[#a87b51]/50 transition-colors"
                  required
                  autoFocus
                />
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Contraseña"
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 pr-12 text-[#fdfbf7] placeholder:text-[#fdfbf7]/30 focus:outline-none focus:border-[#a87b51]/50 transition-colors"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#fdfbf7]/40 hover:text-[#fdfbf7]/80 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              
              {error && (
                <p className="text-red-400 text-xs text-center">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#a87b51] hover:bg-[#b98a5d] text-white py-3 rounded-lg font-medium transition-colors disabled:opacity-50"
              >
                {loading ? "Verificando..." : "Entrar"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
