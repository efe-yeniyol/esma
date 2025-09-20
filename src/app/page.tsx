"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Geçici kullanıcı kontrolü
    if (email === "esmaaydın" && password === "esmaaydın1") {
      // Başarılı giriş
      router.push("/dashboard");
    } else {
      // Hatalı giriş
      setError("E-posta veya şifre hatalı!");
    }
  };
  return (
    <div className="min-h-screen bg-[#0D0D0D] flex flex-col items-center justify-center px-4 py-8">
      {/* Ana Container */}
      <div className="w-full max-w-md mx-auto">
        {/* Logo/Resim */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <Image
              src="/assets/1.png"
              alt="Esma Aydın Logo"
              width={200}
              height={200}
              className="rounded-2xl shadow-2xl shadow-[#3D1C56]/30"
              priority
            />
            {/* Glow efekti */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#3D1C56] to-[#6A1B9A] opacity-20 blur-xl -z-10"></div>
          </div>
        </div>

        {/* Site Başlığı */}
        <div className="text-center mb-12">
          <h1 className="font-poppins font-bold text-2xl md:text-3xl text-white mb-2">
            Esma Aydın
          </h1>
          <p className="font-montserrat text-[#BB86FC] text-lg md:text-xl font-medium">
            Biyomühendislik Yapay Zeka Aracı
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#3D1C56] to-[#6A1B9A] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Login Form */}
        <div className="bg-[#1A1A1D] rounded-2xl p-8 shadow-2xl border border-[#3D1C56]/20">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Error Message */}
            {error && (
              <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-lg text-sm font-montserrat">
                {error}
              </div>
            )}

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-montserrat font-medium text-[#BB86FC] mb-2">
                E-posta
              </label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#3D1C56] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6A1B9A] focus:border-transparent transition-all duration-300"
                placeholder="esmaaydın"
                required
              />
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block text-sm font-montserrat font-medium text-[#BB86FC] mb-2">
                Şifre
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#3D1C56] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6A1B9A] focus:border-transparent transition-all duration-300"
                placeholder="esmaaydın1"
                required
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#3D1C56] to-[#6A1B9A] text-white font-poppins font-semibold py-3 px-6 rounded-lg hover:from-[#6A1B9A] hover:to-[#3D1C56] transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-[#6A1B9A]/30"
            >
              Giriş Yap
            </button>
          </form>

          {/* Alt Bilgi */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-400 font-montserrat">
              Biyomühendislik AI aracına erişim için giriş yapın
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500 font-montserrat">
            © 2025 Esma Aydın - Biyomühendislik AI Platformu
          </p>
        </div>
      </div>
    </div>
  );
}
