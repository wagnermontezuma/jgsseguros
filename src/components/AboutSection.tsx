import React from 'react';
import Image from 'next/image';
import { Building, Clock } from 'lucide-react'; // Ícones

const AboutSection = () => {
  return (
    <section id="a-jgs" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-6">
          JGS: Inteligência nas Soluções de Seguros
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-orange-500 rounded-full p-4 inline-block mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2a10 10 0 100 20 10 10 0 000-20z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold">Experiência em Seguros</h3>
            <p className="text-gray-600">Mais de 40 anos de experiência em seguros dos mais diversos tipos.</p>
          </div>
          <div className="text-center">
            <div className="bg-orange-500 rounded-full p-4 inline-block mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2a10 10 0 100 20 10 10 0 000-20z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold">Atendimento Personalizado 24h</h3>
            <p className="text-gray-600">Atendimento rápido e eficiente onde e quando você precisar.</p>
          </div>
          <div className="text-center">
            <div className="bg-orange-500 rounded-full p-4 inline-block mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2a10 10 0 100 20 10 10 0 000-20z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold">Estrutura de Ponta</h3>
            <p className="text-gray-600">Nossa estrutura reflete o nosso compromisso em oferecer o melhor, sempre.</p>
          </div>
          <div className="text-center">
            <div className="bg-orange-500 rounded-full p-4 inline-block mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2a10 10 0 100 20 10 10 0 000-20z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold">Maior corretora Norte e Nordeste</h3>
            <p className="text-gray-600">A JGS domina o mercado de seguros no Norte e Nordeste do Brasil.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 