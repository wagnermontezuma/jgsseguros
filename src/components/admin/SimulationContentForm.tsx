'use client';

import React, { useState, FormEvent, useEffect } from 'react';
import { Plus, Trash2 } from 'lucide-react'; // Importar X para o botão de remover

interface OptionItem {
  value: string;
  label: string;
}

interface SimulationFormData {
  title: string;
  subtitle: string;
  insuranceOptions: OptionItem[];
  deductibleOptions: OptionItem[];
}

// Mock inicial
const initialData: SimulationFormData = {
  title: 'Simule seu seguro',
  subtitle: 'Veja o custo do seu seguro',
  insuranceOptions: [
    { value: 'viagem', label: 'Seguro Viagem' },
    { value: 'vida', label: 'Seguro de Vida' },
    { value: 'residencial', label: 'Seguro Residencial' },
    { value: 'auto', label: 'Seguro Automóvel' },
  ],
  deductibleOptions: [
    { value: 'baixa', label: 'Baixa' },
    { value: 'media', label: 'Média' },
    { value: 'alta', label: 'Alta' },
  ],
};

const SimulationContentForm = () => {
  const [formData, setFormData] = useState<SimulationFormData>(initialData);
  const [newInsuranceOption, setNewInsuranceOption] = useState<OptionItem>({ value: '', label: '' });
  const [newDeductibleOption, setNewDeductibleOption] = useState<OptionItem>({ value: '', label: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/content/simulation');
        if (!response.ok) throw new Error('Erro ao carregar dados da simulação');
        const data = await response.json();
        setFormData(data);
      } catch (error) {
        console.error(error);
        setStatusMessage('Erro ao carregar dados da simulação.');
      }
    };
    fetchData();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNewOptionChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'insurance' | 'deductible') => {
      const { name, value } = e.target;
      const stateSetter = type === 'insurance' ? setNewInsuranceOption : setNewDeductibleOption;
      stateSetter(prev => ({ ...prev, [name]: value }));
  }

  // Funções para adicionar/remover opções
  const addOption = async (type: 'insurance' | 'deductible') => {
    const newOption = type === 'insurance' ? newInsuranceOption : newDeductibleOption;
    const optionsKey = type === 'insurance' ? 'insuranceOptions' : 'deductibleOptions';
    const stateSetter = type === 'insurance' ? setNewInsuranceOption : setNewDeductibleOption;

    if (!newOption.value || !newOption.label) {
        setStatusMessage('Valor e Label são obrigatórios para adicionar opção.');
        return;
    }

    const exists = formData[optionsKey].some(opt => opt.value === newOption.value);
    if (exists) {
        setStatusMessage(`Opção com valor "${newOption.value}" já existe.`);
        return;
    }

    try {
      const response = await fetch(`/api/content/simulation/${type}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newOption),
      });
      if (!response.ok) throw new Error('Erro ao adicionar opção');

      setFormData(prev => ({
          ...prev,
          [optionsKey]: [...prev[optionsKey], newOption]
      }));
      stateSetter({ value: '', label: '' });
      setStatusMessage(`Opção "${newOption.label}" adicionada à lista (${type}).`);
    } catch (error) {
      console.error(error);
      setStatusMessage('Erro ao adicionar opção.');
    }
  }

  const removeOption = async (type: 'insurance' | 'deductible', valueToRemove: string) => {
     const optionsKey = type === 'insurance' ? 'insuranceOptions' : 'deductibleOptions';
     try {
       const response = await fetch(`/api/content/simulation/${type}/${valueToRemove}`, {
         method: 'DELETE',
       });
       if (!response.ok) throw new Error('Erro ao remover opção');

       setFormData(prev => ({
           ...prev,
           [optionsKey]: prev[optionsKey].filter(opt => opt.value !== valueToRemove)
       }));
       setStatusMessage(`Opção com valor "${valueToRemove}" removida da lista (${type}).`);
     } catch (error) {
       console.error(error);
       setStatusMessage('Erro ao remover opção.');
     }
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage('Salvando Configurações da Simulação...');
    console.log("Salvando dados (Simulação):", formData);

    try {
      // API call para salvar `formData`
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStatusMessage('Configurações da simulação salvas com sucesso!');
    } catch (error) {
      console.error("Erro ao salvar (Simulação):", error);
      setStatusMessage('Erro ao salvar configurações da simulação.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">Seção de Simulação</h2>

      <div>
        <label htmlFor="title-sim" className="label-base">Título da Seção</label>
        <input type="text" id="title-sim" name="title" value={formData.title} onChange={handleInputChange} className="input-base" />
      </div>
      <div>
        <label htmlFor="subtitle-sim" className="label-base">Subtítulo da Seção</label>
        <input type="text" id="subtitle-sim" name="subtitle" value={formData.subtitle} onChange={handleInputChange} className="input-base" />
      </div>

      {/* Gerenciar Opções de Seguro */}
      <div className="space-y-3 p-4 border rounded-md bg-gray-50">
        <h3 className="text-lg font-medium text-gray-700 mb-3">Opções de Seguro (Select)</h3>
        <div className="space-y-2 mb-4 max-h-48 overflow-y-auto pr-2">
            {formData.insuranceOptions.map(opt => (
                <div key={opt.value} className="flex items-center justify-between space-x-2 p-2 bg-white rounded border border-gray-200">
                    <span className="text-sm">{opt.label} <span className="text-xs text-gray-500">({opt.value})</span></span>
                    <button type="button" onClick={() => removeOption('insurance', opt.value)} className="p-1 text-red-500 hover:text-red-700 hover:bg-red-100 rounded-full transition-colors" aria-label={`Remover ${opt.label}`}>
                        <Trash2 size={14}/>
                    </button>
                </div>
            ))}
        </div>
        <div className="flex items-end space-x-2 border-t pt-3 mt-3">
            <div className="flex-grow">
                <label htmlFor="new-insurance-label" className="text-xs font-medium text-gray-600">Label</label>
                <input
                    type="text"
                    id="new-insurance-label"
                    name="label"
                    value={newInsuranceOption.label}
                    onChange={(e) => handleNewOptionChange(e, 'insurance')}
                    className="input-base text-sm py-1"
                    placeholder="Ex: Seguro Pet"
                />
            </div>
            <div className="flex-grow">
                <label htmlFor="new-insurance-value" className="text-xs font-medium text-gray-600">Valor (único)</label>
                 <input
                    type="text"
                    id="new-insurance-value"
                    name="value"
                    value={newInsuranceOption.value}
                    onChange={(e) => handleNewOptionChange(e, 'insurance')}
                    className="input-base text-sm py-1"
                    placeholder="Ex: pet"
                 />
            </div>
            <button type="button" onClick={() => addOption('insurance')} className="btn-primary bg-green-600 hover:bg-green-700 focus:ring-green-500 text-sm py-1 px-3 self-end flex items-center shrink-0">
                 <Plus size={16} className="mr-1"/> Adicionar
            </button>
        </div>
      </div>

      {/* Gerenciar Opções de Franquia */}
       <div className="space-y-3 p-4 border rounded-md bg-gray-50">
        <h3 className="text-lg font-medium text-gray-700 mb-3">Opções de Franquia (Select)</h3>
         <div className="space-y-2 mb-4 max-h-48 overflow-y-auto pr-2">
            {formData.deductibleOptions.map(opt => (
                <div key={opt.value} className="flex items-center justify-between space-x-2 p-2 bg-white rounded border border-gray-200">
                    <span className="text-sm">{opt.label} <span className="text-xs text-gray-500">({opt.value})</span></span>
                     <button type="button" onClick={() => removeOption('deductible', opt.value)} className="p-1 text-red-500 hover:text-red-700 hover:bg-red-100 rounded-full transition-colors" aria-label={`Remover ${opt.label}`}>
                        <Trash2 size={14}/>
                    </button>
                </div>
            ))}
        </div>
        <div className="flex items-end space-x-2 border-t pt-3 mt-3">
            <div className="flex-grow">
                 <label htmlFor="new-deductible-label" className="text-xs font-medium text-gray-600">Label</label>
                 <input
                    type="text"
                    id="new-deductible-label"
                    name="label"
                    value={newDeductibleOption.label}
                    onChange={(e) => handleNewOptionChange(e, 'deductible')}
                    className="input-base text-sm py-1"
                    placeholder="Ex: Reduzida"
                 />
            </div>
             <div className="flex-grow">
                <label htmlFor="new-deductible-value" className="text-xs font-medium text-gray-600">Valor (único)</label>
                 <input
                    type="text"
                    id="new-deductible-value"
                    name="value"
                    value={newDeductibleOption.value}
                    onChange={(e) => handleNewOptionChange(e, 'deductible')}
                    className="input-base text-sm py-1"
                    placeholder="Ex: reduzida"
                 />
            </div>
             <button type="button" onClick={() => addOption('deductible')} className="btn-primary bg-green-600 hover:bg-green-700 focus:ring-green-500 text-sm py-1 px-3 self-end flex items-center shrink-0">
                 <Plus size={16} className="mr-1"/> Adicionar
            </button>
        </div>
      </div>

      {/* Botão Salvar Tudo */}
      <div className="pt-6 border-t border-gray-200">
        <button type="submit" disabled={isLoading} className="btn-primary">
          {isLoading ? 'Salvando...' : 'Salvar Configurações da Simulação'}
        </button>
        {statusMessage && <p className={`text-sm mt-2 ${statusMessage.includes('Erro') || statusMessage.includes('Valor e Label') || statusMessage.includes('já existe') ? 'text-red-600' : 'text-green-600'}`}>{statusMessage}</p>}
      </div>
    </form>
  );
};

export default SimulationContentForm; 