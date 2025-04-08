'use client'; // Necessário para hooks do carrossel

import React, { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface SolutionCardProps {
  title: string;
  imageSrc: string;
  href: string;
  category: 'personal' | 'business';
}

const solutionsData: SolutionCardProps[] = [
  { title: 'Automóvel\nMoto', imageSrc: '/sol-automovel.jpg', href: '/seguro-auto', category: 'personal' },
  { title: 'Vida', imageSrc: '/sol-vida.jpg', href: '/seguro-vida', category: 'personal' },
  { title: 'Residencial', imageSrc: '/sol-residencial.jpg', href: '/seguro-residencial', category: 'personal' },
  { title: 'Previdência\nPrivada', imageSrc: '/sol-previdencia.jpg', href: '/previdencia-privada', category: 'personal' },
  { title: 'Viagem', imageSrc: '/sol-viagem.jpg', href: '/seguro-viagem', category: 'personal' },
  { title: 'Saúde\nEmpresarial', imageSrc: '/sol-saude-emp.jpg', href: '/saude-empresarial', category: 'business' },
  { title: 'Patrimonial', imageSrc: '/sol-patrimonial.jpg', href: '/seguro-patrimonial', category: 'business' },
  { title: 'Frota', imageSrc: '/sol-frota.jpg', href: '/seguro-frota', category: 'business' },
  { title: 'Responsabilidade\nCivil', imageSrc: '/sol-resp-civil.jpg', href: '/responsabilidade-civil', category: 'business' },
];

const SolutionCard: React.FC<SolutionCardProps> = ({ title, imageSrc, href }) => (
  <Link href={href} className="relative flex-[0_0_80%] sm:flex-[0_0_40%] md:flex-[0_0_30%] lg:flex-[0_0_22%] aspect-[3/4] rounded-lg overflow-hidden group mx-2">
    <Image
      src={imageSrc}
      alt={title.replace('\n', ' ')}
      fill
      className="object-cover transition-transform duration-300 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 flex flex-col justify-end">
      <h3 className="text-white text-xl md:text-2xl font-bold whitespace-pre-line leading-tight">
        {title}
      </h3>
      {/* Linha decorativa */}
      <div className="w-1/3 h-1 bg-orange-500 mt-2 rounded-full" />
    </div>
  </Link>
);


const SolutionsCarousel = () => {
  const [activeCategory, setActiveCategory] = useState<'personal' | 'business'>('personal');
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'start' });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const filteredSolutions = solutionsData.filter(sol => sol.category === activeCategory);

  // Reinicia o carrossel ao mudar de categoria
  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit({ align: 'start'}); // Reinitialize para aplicar o align corretamente
      emblaApi.scrollTo(0, false); // Volta para o início sem animação
    }
  }, [activeCategory, emblaApi]);


  return (
    <section id="solucoes" className="py-16 md:py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div>
            <p className="text-sm uppercase tracking-wider text-gray-500 mb-1">Nossos seguros</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Soluções JGS
            </h2>
          </div>
          {/* Botões de Filtro */}
          <div className="mt-6 md:mt-0 flex bg-orange-500 rounded-md p-1 space-x-1">
            <button
              onClick={() => setActiveCategory('personal')}
              className={`px-6 py-2 rounded text-sm font-medium transition-colors ${activeCategory === 'personal' ? 'bg-white text-orange-600 shadow' : 'text-white hover:bg-orange-600'}`}
            >
              Para você
            </button>
            <button
              onClick={() => setActiveCategory('business')}
              className={`px-6 py-2 rounded text-sm font-medium transition-colors ${activeCategory === 'business' ? 'bg-white text-orange-600 shadow' : 'text-white hover:bg-orange-600'}`}
            >
              Para sua empresa
            </button>
          </div>
        </div>

        {/* Carrossel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-2"> {/* Negative margin to offset card margin */}
            {filteredSolutions.map((solution) => (
              <SolutionCard key={solution.title} {...solution} />
            ))}
          </div>
        </div>

        {/* Controles do Carrossel */}
        <div className="flex justify-center items-center mt-8 space-x-4">
          <button 
            onClick={scrollPrev} 
            className="p-2 rounded-full bg-white text-orange-500 shadow-md hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Slide anterior"
            disabled={!emblaApi?.canScrollPrev()}
          >
            <ArrowLeft size={20} />
          </button>
          <button 
            onClick={scrollNext} 
            className="p-2 rounded-full bg-white text-orange-500 shadow-md hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Próximo slide"
            disabled={!emblaApi?.canScrollNext()}
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SolutionsCarousel; 