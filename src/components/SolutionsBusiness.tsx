import React from 'react';
import Link from 'next/link';
import { Stethoscope, Building2, Truck, ShieldCheck } from 'lucide-react';

interface CardProps {
  icon: React.ElementType;
  title: string;
  href: string;
}

// Reutilizando o componente de card da seção pessoal
const SolutionCard: React.FC<CardProps> = ({ icon: Icon, title, href }) => (
  <div className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col items-center transition-transform hover:scale-105">
    <Icon size={48} className="text-orange-500 mb-4" />
    <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
    <Link
      href={href}
      className="mt-auto inline-block bg-blue-600 text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
    >
      Solicitar Cotação
    </Link>
  </div>
);

const SolutionsBusiness = () => {
  const solutions = [
    { icon: Stethoscope, title: 'Seguro Saúde Empresarial', href: '/saude-empresarial' },
    { icon: Building2, title: 'Seguro Patrimonial', href: '/seguro-patrimonial' },
    { icon: Truck, title: 'Seguro de Frota', href: '/seguro-frota' },
    { icon: ShieldCheck, title: 'Responsabilidade Civil', href: '/responsabilidade-civil' },
  ];

  return (
    <section id="para-sua-empresa" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Proteja o que importa para seu negócio
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

export default SolutionsBusiness; 