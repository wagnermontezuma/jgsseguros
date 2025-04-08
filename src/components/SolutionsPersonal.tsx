import React from 'react';
import Link from 'next/link';
import { Plane, HeartHandshake, Home, Phone } from 'lucide-react';

interface CardProps {
  icon: React.ElementType;
  title: string;
  href: string;
}

const SolutionCard: React.FC<CardProps> = ({ icon: Icon, title, href }) => (
  <div className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col items-center transition-transform hover:scale-105">
    <Icon size={48} className="text-orange-500 mb-4" />
    <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
    <Link
      href={href}
      className="mt-auto inline-block bg-blue-600 text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
    >
      Saiba mais
    </Link>
  </div>
);

const SolutionsPersonal = () => {
  const solutions = [
    { icon: Plane, title: 'Seguro Viagem', href: '/seguro-viagem' },
    { icon: HeartHandshake, title: 'Seguro de Vida', href: '/seguro-vida' },
    { icon: Home, title: 'Seguro Residencial', href: '/seguro-residencial' },
    { icon: Phone, title: 'Assistência 24h', href: '/assistencia-24h' },
  ];

  return (
    <section id="para-voce" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Soluções para você
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution) => (
            <SolutionCard key={solution.title} {...solution} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsPersonal; 