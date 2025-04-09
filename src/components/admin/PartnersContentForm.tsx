'use client';

import React, { useState, FormEvent, useEffect } from 'react';
import Image from 'next/image';
import { Plus, Trash2 } from 'lucide-react';

interface PartnerItem {
  id: string;
  alt: string;
  src: string;
}

// Mock inicial
const initialPartners: PartnerItem[] = [
  { id: 'part-1', src: '/partners/logo-placeholder-1.svg', alt: 'Parceiro 1' },
  { id: 'part-2', src: '/partners/logo-placeholder-2.svg', alt: 'Parceiro 2' },
  // ...
];

const PartnersContentForm = () => {
  const [partners, setPartners] = useState<PartnerItem[]>(initialPartners);
  const [newPartner, setNewPartner] = useState<Omit<PartnerItem, 'id'>>({ alt: '', src: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  useEffect(() => {
    // fetch('/api/content/partners').then(res => res.json()).then(data => setPartners(data));
    console.log("Carregando dados iniciais dos Parceiros (simulado)");
  }, []);

  const handleNewInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewPartner(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      console.log(`Arquivo selecionado (Novo Parceiro):`, file.name);
      setStatusMessage(`Logo ${file.name} selecionado. Implementar upload.`);
      // Simulação: Atualizar src após upload
      // setNewPartner(prev => ({ ...prev, src: `/uploads/partners/${file.name}` }));
    }
  };

  const addPartner = () => {
     if (!newPartner.alt || !newPartner.src) { // Idealmente checar se src veio do upload
        setStatusMessage("Nome (alt) e Logo são obrigatórios para adicionar.");
        return;
    }
    const newId = `part-${Date.now()}`;
    setPartners(prev => [...prev, { ...newPartner, id: newId }]);
    setNewPartner({ alt: '', src: '' });
    setStatusMessage("Novo parceiro adicionado (pré-salvamento).");
  };

  const removePartner = (id: string) => {
    setPartners(prev => prev.filter(p => p.id !== id));
    setStatusMessage("Parceiro removido (pré-salvamento).");
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage('Salvando Parceiros...');
    console.log("Salvando dados (Parceiros):", partners);

    try {
      // API call para salvar `partners`
      await new Promise(resolve => setTimeout(resolve, 1000)); 
      setStatusMessage('Parceiros salvos com sucesso!');
    } catch (error) {
      console.error("Erro ao salvar (Parceiros):", error);
      setStatusMessage('Erro ao salvar parceiros.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">Parceiros</h2>
      
      {/* Lista de Parceiros */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {partners.map((partner) => (
          <div key={partner.id} className="relative p-4 border rounded-md flex flex-col items-center justify-center bg-gray-50 aspect-video">
             <button type="button" onClick={() => removePartner(partner.id)} className="absolute top-1 right-1 p-1 text-red-500 hover:text-red-700 rounded-full" aria-label={`Remover ${partner.alt}`}>
                <Trash2 size={14}/>
             </button>
             <div className="relative h-12 w-full mb-2">
                 <Image src={partner.src} alt={partner.alt} fill className="object-contain"/>
             </div>
            <p className="text-xs text-gray-600 text-center truncate w-full" title={partner.alt}>{partner.alt}</p>
          </div>
        ))}
      </div>

      {/* Adicionar Novo Parceiro */}
      <div className="p-4 border rounded-md space-y-4 border-dashed border-orange-400">
        <h3 className="text-lg font-medium text-gray-700">Adicionar Novo Parceiro</h3>
        <div>
            <label htmlFor="new-alt" className="label-base">Nome do Parceiro (alt text)</label>
            <input type="text" id="new-alt" name="alt" value={newPartner.alt} onChange={handleNewInputChange} className="input-base" />
        </div>
        <div>
            <label htmlFor="new-src" className="label-base">Logo do Parceiro</label>
            <input type="file" id="new-src" name="src" onChange={handleFileChange} className="input-file-base" accept="image/*,.svg"/>
        </div>
         <button type="button" onClick={addPartner} className="btn-primary bg-green-600 hover:bg-green-700 focus:ring-green-500 flex items-center text-sm">
           <Plus size={16} className="mr-1"/> Adicionar à Lista
        </button>
      </div>

      {/* Botão Salvar Tudo */}
      <div className="pt-6 border-t border-gray-200">
        <button type="submit" disabled={isLoading} className="btn-primary">
          {isLoading ? 'Salvando...' : 'Salvar Todos os Parceiros'}
        </button>
        {statusMessage && <p className={`text-sm mt-2 ${statusMessage.includes('Erro') ? 'text-red-600' : 'text-green-600'}`}>{statusMessage}</p>}
      </div>
    </form>
  );
};

export default PartnersContentForm; 