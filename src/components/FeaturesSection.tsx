import React from 'react';
import { Briefcase, Headphones, Building, Award } from 'lucide-react';

interface FeatureItemProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon: Icon, title, description }) => (
  <div className="text-center md:text-left flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4">
    <div className="flex-shrink-0">
      <span className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-orange-500">
        <Icon className="h-8 w-8 text-white" />
      </span>
    </div>
    <div>
      <h3 className="text-lg font-bold text-gray-900 mb-1">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);

const FeaturesSection = () => {
  const features: FeatureItemProps[] = [
    {
      icon: Briefcase,
      title: 'Experiência em Seguros',
      description: 'Mais de 40 anos de experiência em seguros dos mais diversos tipos.',
    },
    {
      icon: Headphones,
      title: 'Atendimento Personalizado 24h',
      description: 'Atendimento rápido e eficiente onde e quando você precisar.',
    },
    {
      icon: Building,
      title: 'Estrutura de Ponta',
      description: 'Nossa estrutura reflete o nosso compromisso em oferecer o melhor, sempre.',
    },
    {
      icon: Award,
      title: 'Maior corretora Norte e Nordeste',
      description: 'A JGS domina o mercado de seguros no Norte e Nordeste do Brasil.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white"> {/* Fundo branco ou cinza claro, imagem pode ser add depois */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12 md:mb-16">
          JGS: INTELIGÊNCIA NAS SOLUÇÕES DE SEGUROS
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          {features.map((feature) => (
            <FeatureItem key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection; 