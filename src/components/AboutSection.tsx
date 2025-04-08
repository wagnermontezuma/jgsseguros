import React from 'react';
import Image from 'next/image';
import { Building, Clock } from 'lucide-react'; // Ícones

const AboutSection = () => {
  return (
    <section id="a-jgs" className="py-16 md:py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Coluna de Texto */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Quem somos
            </h2>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              Com mais de 40 anos de tradição e expertise, a JGS Corretores de Seguros se consolida como sua parceira de confiança em proteção.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Somos especialistas em seguros de viagem, garantindo que suas aventuras pelo mundo sejam tranquilas e seguras. Oferecemos um atendimento personalizado e soluções sob medida para cada cliente, seja pessoa física ou jurídica.
            </p>
            <div className="flex items-center text-blue-600 space-x-4">
              <Clock size={24} />
              <span>Mais de 40 anos de experiência</span>
            </div>
          </div>

          {/* Coluna de Imagem/Ilustração */}
          <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
            {/* Você pode substituir por uma imagem real */}
            <div className="bg-blue-500 h-full flex items-center justify-center">
              <Building size={80} className="text-white opacity-50" />
            </div>
             {/* Ou usar uma imagem: */}
            {/* <Image
              src="/imagem-sobre.jpg" // Coloque a imagem na pasta public
              alt="Escritório da JGS Seguros"
              fill
              className="object-cover"
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 