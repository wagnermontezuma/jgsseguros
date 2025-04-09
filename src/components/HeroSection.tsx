import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Define a interface para as props
interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  backgroundType?: 'image' | 'video' | 'gif';
  backgroundSrc?: string;
  // Adicione mais props se necessário (ex: logoSrc)
}

// Valores padrão caso as props não sejam fornecidas
const defaultProps: Required<HeroSectionProps> = {
  title: 'JGS seu companheiro<br />de viagem', // Use \n ou <br/> ? Optando por string pura e usando dangerouslySetInnerHTML
  subtitle: 'Em todas as fases da vida com você',
  backgroundType: 'image',
  backgroundSrc: '/sunset-beach.png',
};

const HeroSection: React.FC<HeroSectionProps> = (props) => {
  // Combina props recebidas com valores padrão
  const { title, subtitle, backgroundType, backgroundSrc } = { ...defaultProps, ...props };

  // Função para renderizar o fundo
  const renderBackground = () => {
    if (!backgroundSrc) return null;

    switch (backgroundType) {
      case 'video':
        return (
          <video
            key={backgroundSrc} // Chave para forçar recriação se src mudar
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
          >
            <source src={backgroundSrc} type="video/mp4" /> {/* Ajuste o type se necessário */}
            Seu navegador não suporta vídeos HTML5.
          </video>
        );
      case 'gif': // GIFs podem ser tratados como imagens normais
      case 'image':
      default:
        return (
          <Image
            key={backgroundSrc} // Chave para forçar recriação se src mudar
            src={backgroundSrc}
            alt="Fundo do banner principal"
            fill
            className="object-cover z-0"
            priority
            quality={100}
          />
        );
    }
  };

  return (
    <div className="relative min-h-screen">
      {/* Background Image/Video & Overlay */}
      <div className="absolute inset-0 z-0">
        {renderBackground()}
      </div>
      <div className="absolute inset-0 bg-black opacity-50 z-10" /> {/* Overlay escuro */}

      {/* Navigation - Ajustes aplicados */}
      <header className="relative z-20 w-full">
        <nav className="container mx-auto px-4 py-6 flex items-center justify-between"> {/* py-6 adicionado */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="JGS Corretores de Seguros"
              width={200} // Aumentado de 120 para 200 (ajuste conforme necessário)
              height={100} // Aumentado de 60 para 100 (mantendo proporção aprox.)
              className="h-20 w-auto" // Aumentado de h-12 para h-20
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8 text-white"> {/* space-x-8 adicionado */}
            {/* Estilos dos links ajustados */}
            <Link href="/" className="text-base font-medium hover:text-orange-400 transition-colors">
              Home
            </Link>
            <Link href="#a-jgs" className="text-base font-medium hover:text-orange-400 transition-colors">
              A JGS
            </Link>
            <Link href="#para-voce" className="text-base font-medium hover:text-orange-400 transition-colors">
              Para Você
            </Link>
            <Link href="#para-sua-empresa" className="text-base font-medium hover:text-orange-400 transition-colors">
              Para sua Empresa
            </Link>
            <Link href="#contato" className="text-base font-medium hover:text-orange-400 transition-colors">
              Contatos
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            {/* Estilo do botão Contratar ajustado */}
            <Link
              href="/contratar"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md font-semibold shadow-md transition-colors"
            >
              Contratar Seguro
            </Link>
            {/* Estilo do botão Simular ajustado */}
            <Link
              href="/simular"
              className="border border-white text-white px-6 py-2 rounded-md hover:bg-white hover:text-blue-900 transition"
            >
              Simular Seguro
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Content - Ajustes aplicados */}
      {/* Centralização vertical e z-index */}
      <div className="relative z-20 container mx-auto px-4 flex flex-col items-center justify-center min-h-[80vh] text-center max-w-screen-lg">
        {/* Estilo do título ajustado */}
        <h1 
          className="text-4xl md:text-6xl font-bold text-white drop-shadow-xl mb-4"
          dangerouslySetInnerHTML={{ __html: title.replace(/\n/g, '<br />') }} 
        />
        {/* Estilo do subtítulo ajustado */}
        <p className="text-lg md:text-xl text-white drop-shadow mt-4">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default HeroSection; 