"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function Dashboard() {
  useEffect(() => {
    // ElevenLabs ConvAI widget'ını yükle
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@elevenlabs/convai-widget-embed';
    script.async = true;
    script.type = 'text/javascript';
    document.head.appendChild(script);

    return () => {
      // Cleanup
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);
  return (
    <div className="min-h-screen bg-[#0D0D0D] flex flex-col items-center justify-center px-4 py-8">
      {/* Ana Container */}
      <div className="w-full max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <Image
              src="/assets/1.png"
              alt="Esma Aydın Logo"
              width={100}
              height={100}
              className="rounded-2xl shadow-2xl shadow-[#3D1C56]/30"
              priority
            />
          </div>
          <h1 className="font-poppins font-bold text-3xl md:text-4xl text-white mb-2">
            Hoş Geldiniz, Esma!
          </h1>
          <p className="font-montserrat text-[#BB86FC] text-lg md:text-xl font-medium">
            Biyomühendislik AI Dashboard
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#3D1C56] to-[#6A1B9A] mx-auto mt-4 rounded-full"></div>
        </div>


        {/* ElevenLabs ConvAI Widget */}
        <div className="flex justify-center mb-8">
          <elevenlabs-convai agent-id="agent_1401k5m9t8cmf6zszjyxvg0msvkt"></elevenlabs-convai>
        </div>

      </div>
    </div>
  );
}
