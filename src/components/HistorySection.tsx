import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PlayCircle } from 'lucide-react'; // Ícone de Play

const HistorySection = () => {
  return (
    <section 
      id="nossa-historia" 
      className="relative py-16 md:py-24 bg-orange-600 text-white overflow-hidden"
    >
      {/* Background com imagem sutil (opcional) */}
      <div className="absolute inset-0 z-0 opacity-10">
        <Image 
          src="/cityscape-bg.png" // Coloque uma imagem de cityscape na pasta public
          alt="" 
          fill 
          className="object-cover"
          aria-hidden="true"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Coluna de Texto */}
          <div>
            <p className="text-sm uppercase tracking-wider text-orange-200 mb-2">História</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Nossa História: Protegendo Sonhos, Garantindo Segurança
            </h2>
            <p className="text-lg text-orange-100 mb-8 leading-relaxed">
              Fundada com o compromisso de oferecer proteção e tranquilidade, nossa empresa se tornou referência no mercado de seguros, ajudando milhares de clientes a proteger o que realmente importa. Com uma equipe especializada e soluções personalizadas, garantimos coberturas completas para pessoas e empresas, sempre com transparência, confiança e excelência no atendimento.
            </p>
            <Link
              href="/nossa-historia" // Link para uma página dedicada, se houver
              className="inline-block bg-white text-orange-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors shadow-md"
            >
              Saiba mais
            </Link>
          </div>

          {/* Coluna de Imagem/Vídeo */}
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg group">
            <Image
              src="/team-meeting.jpg" // Coloque uma imagem representativa na pasta public
              alt="Equipe JGS Seguros em reunião"
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
            {/* Overlay para o botão de play */}
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <button 
                aria-label="Play video sobre a JGS Seguros" 
                className="text-white opacity-80 hover:opacity-100 transition-opacity"
                // Adicione onClick para abrir um modal/player de vídeo
              >
                <PlayCircle size={80} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection; 