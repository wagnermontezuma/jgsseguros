'use client';

import React from 'react';
import Link from 'next/link';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';

interface FaqItemProps {
  question: string;
  answer: string;
}

const faqData: FaqItemProps[] = [
  {
    question: 'Por que devo contratar um seguro?',
    answer: 'Contratar um seguro oferece proteção financeira contra imprevistos, garantindo tranquilidade para você, sua família ou seu negócio em diversas situações, como acidentes, problemas de saúde em viagens, danos patrimoniais ou responsabilidade civil.',
  },
  {
    question: 'Quais tipos de seguros a JGS oferece?',
    answer: 'A JGS oferece uma ampla gama de seguros, incluindo Seguro Viagem, Vida, Residencial, Automóvel, Moto, Previdência Privada, Saúde Empresarial, Patrimonial, Frota e Responsabilidade Civil, entre outros. Consulte nossas soluções para encontrar a proteção ideal.',
  },
  {
    question: 'Como faço para contratar um seguro?',
    answer: 'O processo é simples! Você pode simular e contratar diretamente pelo nosso site, entrar em contato conosco via WhatsApp, telefone ou e-mail, ou preencher nosso formulário de contato. Nossa equipe especializada irá te auxiliar a encontrar a melhor opção.',
  },
  {
    question: 'Posso personalizar a cobertura do meu seguro?',
    answer: 'Sim! A maioria dos nossos seguros permite personalização das coberturas e assistências para atender às suas necessidades específicas. Fale com um de nossos consultores para entender as opções disponíveis para o seguro desejado.',
  },
  {
    question: 'Como funciona a assistência 24h do seguro?',
    answer: 'A assistência 24h oferece suporte imediato em situações de emergência, como problemas médicos em viagens, panes em veículos ou incidentes residenciais. Basta acionar a central de atendimento indicada na sua apólice para receber o auxílio necessário.',
  },
  {
    question: 'O que fazer em caso de sinistro?',
    answer: 'Mantenha a calma e entre em contato com a JGS ou diretamente com a seguradora o mais rápido possível através dos canais de atendimento informados na sua apólice. Tenha em mãos as informações relevantes sobre o ocorrido para agilizar o processo.',
  },
];

const FaqItem: React.FC<FaqItemProps & { value: string }> = ({ question, answer, value }) => (
  <Accordion.Item value={value} className="mb-4">
    <Accordion.Header className="flex">
      <Accordion.Trigger className="flex w-full items-center justify-between rounded-lg border border-gray-200 bg-white py-4 px-5 text-left font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition-colors group">
        <span>{question}</span>
        <ChevronDown size={20} className="text-orange-500 transition-transform duration-300 group-data-[state=open]:rotate-180 flex-shrink-0 ml-4" aria-hidden />
      </Accordion.Trigger>
    </Accordion.Header>
    <Accordion.Content className="overflow-hidden text-sm transition-all data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
      <div className="py-4 px-5 mt-1 bg-white border border-t-0 border-gray-200 rounded-b-lg text-gray-600 leading-relaxed">
        {answer}
      </div>
    </Accordion.Content>
  </Accordion.Item>
);

const FaqSection = () => {
  return (
    <section id="faq" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16 max-w-2xl mx-auto">
          <p className="text-sm uppercase tracking-wider text-gray-500 mb-1">Entenda mais sobre o que oferecemos</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Dúvidas Frequentes
          </h2>
          <p className="text-gray-600">
            Encontre as informações que precisa e garanta mais segurança para você, sua família ou seu negócio!
          </p>
        </div>

        <Accordion.Root
          type="single"
          defaultValue="item-0"
          collapsible
          className="max-w-4xl mx-auto grid md:grid-cols-2 gap-x-6"
        >
          {faqData.map((faq, index) => (
            <FaqItem key={index} {...faq} value={`item-${index}`} />
          ))}
        </Accordion.Root>

        <div className="text-center mt-12">
          <Link
            href="/faq-completo"
            className="inline-block bg-orange-500 text-white px-8 py-3 rounded-md font-semibold hover:bg-orange-600 transition-colors shadow-md"
          >
            Ver mais perguntas
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FaqSection; 