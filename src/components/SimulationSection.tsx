'use client';

import React, { useState, FormEvent } from 'react';
import Image from 'next/image';

// Tipo para as opções dos botões de rádio simulados
type RadioOption = 'Sim' | 'Não';
type PaymentOption = 'Anual' | 'Mensal';

const SimulationSection = () => {
  // Estados para os botões de rádio simulados
  const [dependents, setDependents] = useState<RadioOption | null>(null);
  const [claimHistory, setClaimHistory] = useState<RadioOption | null>(null);
  const [paymentForm, setPaymentForm] = useState<PaymentOption | null>(null);

  const handleRadioClick = (
    setter: React.Dispatch<React.SetStateAction<any>>,
    value: RadioOption | PaymentOption
  ) => {
    setter(value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Lógica para lidar com o envio da simulação aqui
    console.log('Formulário de simulação enviado');
    // Ex: coletar dados dos inputs e states, enviar para API
  };

  // Função auxiliar para classes de botão de rádio
  const getRadioClasses = (
    selectedValue: RadioOption | PaymentOption | null,
    buttonValue: RadioOption | PaymentOption
  ) => {
    const baseClasses = "px-6 py-3 rounded-md border text-sm font-medium transition-colors w-full sm:w-auto";
    if (selectedValue === buttonValue) {
      return `${baseClasses} bg-orange-500 text-white border-orange-500`;
    } else {
      return `${baseClasses} bg-white text-gray-700 border-gray-300 hover:bg-gray-50`;
    }
  };

  return (
    <section id="simulacao" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Coluna da Imagem */}
          <div className="relative hidden lg:block aspect-[4/5]">
            {/* A imagem de fundo bege está embutida na imagem principal ou pode ser um div separado */}
            <div className="absolute inset-0 bg-orange-50 rounded-lg z-0"></div>
            <div className="relative z-10 flex justify-center items-end h-full">
              <Image
                src="/woman-laptop.png" // Coloque a imagem na pasta public
                alt="Mulher sorrindo sentada com laptop"
                width={450} // Ajuste conforme a imagem original
                height={600} // Ajuste conforme a imagem original
                className="object-contain drop-shadow-lg"
              />
            </div>
          </div>

          {/* Coluna do Formulário */}
          <div>
            <p className="text-sm uppercase tracking-wider text-gray-500 mb-1">Veja o custo do seu seguro</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
              Simule seu seguro
            </h2>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {/* Nome */}
              <div className="md:col-span-1">
                <label htmlFor="sim-name" className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
                <input
                  type="text"
                  id="sim-name"
                  name="name"
                  placeholder="Ex: Paulo Andrade"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                />
              </div>

              {/* Dependentes */}
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">Haverá dependentes?</label>
                <div className="flex space-x-3">
                  <button type="button" onClick={() => handleRadioClick(setDependents, 'Sim')} className={getRadioClasses(dependents, 'Sim')}>Sim</button>
                  <button type="button" onClick={() => handleRadioClick(setDependents, 'Não')} className={getRadioClasses(dependents, 'Não')}>Não</button>
                </div>
              </div>

              {/* Qual seguro */}
              <div className="md:col-span-1">
                <label htmlFor="sim-insurance-type" className="block text-sm font-medium text-gray-700 mb-1">Qual seguro você precisa?</label>
                <select
                  id="sim-insurance-type"
                  name="insuranceType"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white text-sm appearance-none pr-8 bg-no-repeat bg-right"
                  style={{ backgroundImage: `url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="%23FF5C1B"%3E%3Cpath fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" /%3E%3C/svg%3E')`, backgroundPosition: 'right 0.75rem center', backgroundSize: '1.5em 1.5em'}}
                >
                  <option value="" disabled selected>Escolha seu seguro</option>
                  {/* Adicionar opções reais aqui */}
                  <option value="viagem">Seguro Viagem</option>
                  <option value="vida">Seguro de Vida</option>
                  <option value="residencial">Seguro Residencial</option>
                  <option value="auto">Seguro Automóvel</option>
                </select>
              </div>

              {/* Histórico Sinistro */}
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">Histórico de Sinistro?</label>
                <div className="flex space-x-3">
                  <button type="button" onClick={() => handleRadioClick(setClaimHistory, 'Sim')} className={getRadioClasses(claimHistory, 'Sim')}>Sim</button>
                  <button type="button" onClick={() => handleRadioClick(setClaimHistory, 'Não')} className={getRadioClasses(claimHistory, 'Não')}>Não</button>
                </div>
              </div>

              {/* Valor Franquia */}
              <div className="md:col-span-1">
                <label htmlFor="sim-deductible" className="block text-sm font-medium text-gray-700 mb-1">Qual o valor preferido para franquia?</label>
                <select
                  id="sim-deductible"
                  name="deductible"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white text-sm appearance-none pr-8 bg-no-repeat bg-right"
                  style={{ backgroundImage: `url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="%23FF5C1B"%3E%3Cpath fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" /%3E%3C/svg%3E')`, backgroundPosition: 'right 0.75rem center', backgroundSize: '1.5em 1.5em'}}
                >
                  <option value="" disabled selected>Escolha uma opção</option>
                  {/* Adicionar opções reais aqui */}
                  <option value="baixa">Baixa</option>
                  <option value="media">Média</option>
                  <option value="alta">Alta</option>
                </select>
              </div>

              {/* Forma Pagamento */}
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">Forma de Pagamento</label>
                <div className="flex space-x-3">
                  <button type="button" onClick={() => handleRadioClick(setPaymentForm, 'Anual')} className={getRadioClasses(paymentForm, 'Anual')}>Anual</button>
                  <button type="button" onClick={() => handleRadioClick(setPaymentForm, 'Mensal')} className={getRadioClasses(paymentForm, 'Mensal')}>Mensal</button>
                </div>
              </div>

              {/* Botão Submit */}
              <div className="md:col-span-1 mt-4">
                 {/* Espaçador para alinhar o botão se necessário, ou ajustar grid */}
              </div>
              <div className="md:col-span-1 mt-4 flex items-end">
                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white px-8 py-3 rounded-md font-semibold hover:bg-orange-600 transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                >
                  Fazer Simulação
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimulationSection; 