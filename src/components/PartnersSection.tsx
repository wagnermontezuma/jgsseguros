import React from 'react';
import Image from 'next/image';

// Array de logos dos parceiros (adicione os arquivos na pasta /public/partners/)
const partnerLogos = [
  { src: '/partners/logo-placeholder-1.svg', alt: 'Parceiro 1' },
  { src: '/partners/logo-placeholder-2.svg', alt: 'Parceiro 2' },
  { src: '/partners/logo-placeholder-3.svg', alt: 'Parceiro 3' },
  { src: '/partners/logo-placeholder-4.svg', alt: 'Parceiro 4' },
  { src: '/partners/logo-placeholder-5.svg', alt: 'Parceiro 5' },
  { src: '/partners/logo-placeholder-6.svg', alt: 'Parceiro 6' },
];

const PartnersSection = () => {
  return (
    <section id="parceiros" className="py-16 md:py-20 bg-gray-50"> {/* Fundo cinza claro */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-wider text-gray-500 mb-1">Quem cresce junto com a gente</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Parceiros
          </h2>
        </div>

        {/* Grid de Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
          {partnerLogos.map((partner, index) => (
            <div key={index} className="relative h-16 flex justify-center items-center filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition duration-300">
              <Image
                src={partner.src}
                alt={partner.alt}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection; 