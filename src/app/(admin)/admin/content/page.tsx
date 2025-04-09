'use client';

import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import HeroContentForm from '@/components/admin/HeroContentForm';
import SolutionsContentForm from '@/components/admin/SolutionsContentForm';
import FaqContentForm from '@/components/admin/FaqContentForm';
import BlogContentForm from '@/components/admin/BlogContentForm';
import SimulationContentForm from '@/components/admin/SimulationContentForm';
import PartnersContentForm from '@/components/admin/PartnersContentForm';
// Importe outros componentes de formulário aqui quando criados
// import FeaturesContentForm from '@/components/admin/FeaturesContentForm';
// import HistoryContentForm from '@/components/admin/HistoryContentForm';
// etc.

const ContentPage = () => {
  const tabs = [
    { value: 'hero', label: 'Banner Principal', component: <HeroContentForm /> },
    // { value: 'features', label: 'Destaques (Inteligência)', component: <div>Formulário Features (a criar)</div> }, // Removido
    // { value: 'history', label: 'Nossa História', component: <div>Formulário História (a criar)</div> }, // Removido
    { value: 'solutions', label: 'Soluções (Carrossel)', component: <SolutionsContentForm /> },
    { value: 'faq', label: 'Dúvidas Frequentes', component: <FaqContentForm /> },
    { value: 'blog', label: 'Blog', component: <BlogContentForm /> },
    { value: 'simulation', label: 'Simulação', component: <SimulationContentForm /> },
    { value: 'partners', label: 'Parceiros', component: <PartnersContentForm /> },
    // Adicione mais abas conforme necessário
  ];

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Gerenciamento de Conteúdo</h1>

      <Tabs.Root defaultValue={tabs[0].value} className="flex flex-col w-full">
        {/* Lista de Abas */}
        <Tabs.List className="flex border-b border-gray-300 mb-6 flex-shrink-0 overflow-x-auto" aria-label="Gerenciar conteúdo do site">
          {tabs.map((tab) => (
            <Tabs.Trigger
              key={tab.value}
              value={tab.value}
              className="whitespace-nowrap px-5 py-2.5 text-sm font-medium text-gray-600 border-b-2 border-transparent data-[state=active]:text-orange-600 data-[state=active]:border-orange-600 data-[state=active]:focus:relative focus:outline-none focus:z-10 hover:text-orange-500 transition-colors"
            >
              {tab.label}
            </Tabs.Trigger>
          ))}
        </Tabs.List>

        {/* Conteúdo das Abas */}
        <div className="flex-grow bg-white p-6 rounded-lg shadow">
          {tabs.map((tab) => (
            <Tabs.Content key={tab.value} value={tab.value} className="focus:outline-none">
              {tab.component}
            </Tabs.Content>
          ))}
        </div>
      </Tabs.Root>
    </div>
  );
};

export default ContentPage; 