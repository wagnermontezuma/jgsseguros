'use client';

import React, { useState, FormEvent, useEffect } from 'react';
import Image from 'next/image';
import { Plus, Trash2 } from 'lucide-react';

interface SolutionItem {
  id: string; // Para identificação única
  title: string;
  imageSrc: string;
  href: string;
  category: 'personal' | 'business';
}

// Mock inicial - No futuro, viria da API
const initialSolutions: SolutionItem[] = [
  { id: 'sol-1', title: 'Automóvel\nMoto', imageSrc: '/sol-automovel.jpg', href: '/seguro-auto', category: 'personal' },
  { id: 'sol-2', title: 'Vida', imageSrc: '/sol-vida.jpg', href: '/seguro-vida', category: 'personal' },
  { id: 'sol-3', title: 'Residencial', imageSrc: '/sol-residencial.jpg', href: '/seguro-residencial', category: 'personal' },
  // ... adicionar outros mocks se necessário
];

const SolutionsContentForm = () => {
  const [solutions, setSolutions] = useState<SolutionItem[]>(initialSolutions);
  const [newSolution, setNewSolution] = useState<Omit<SolutionItem, 'id'>>({ title: '', imageSrc: '', href: '', category: 'personal' });
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  // Carregar dados iniciais (simulado)
  useEffect(() => {
    // fetch('/api/content/solutions').then(res => res.json()).then(data => setSolutions(data));
    console.log("Carregando dados iniciais das Soluções (simulado)");
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, id: string) => {
    const { name, value } = e.target;
    setSolutions(prev => prev.map(sol => sol.id === id ? { ...sol, [name]: value } : sol));
  };

  const handleNewInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewSolution(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, id: string | 'new') => {
    const file = e.target.files?.[0];
    if (file) {
      console.log(`Arquivo selecionado (${id}):`, file.name);
      setStatusMessage(`Arquivo ${file.name} selecionado. Implementar upload.`);
      // Simulação: Atualizar imageSrc após upload
      // const imageUrl = `/uploads/solutions/${file.name}`;
      // if (id === 'new') {
      //   setNewSolution(prev => ({ ...prev, imageSrc: imageUrl }));
      // } else {
      //   setSolutions(prev => prev.map(sol => sol.id === id ? { ...sol, imageSrc: imageUrl } : sol));
      // }
    }
  };

  const addSolution = () => {
    if (!newSolution.title || !newSolution.href) {
        setStatusMessage("Título e Link são obrigatórios para adicionar.");
        return;
    }
    const newId = `sol-${Date.now()}`; // Simples ID único
    setSolutions(prev => [...prev, { ...newSolution, id: newId }]);
    setNewSolution({ title: '', imageSrc: '', href: '', category: 'personal' }); // Limpa o formulário
    setStatusMessage("Nova solução adicionada (pré-salvamento).");
  };

  const removeSolution = (id: string) => {
    setSolutions(prev => prev.filter(sol => sol.id !== id));
    setStatusMessage("Solução removida (pré-salvamento).");
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage('Salvando Soluções...');
    console.log("Salvando dados (Soluções):", solutions);

    try {
      // No futuro: API call para salvar `solutions`
      await new Promise(resolve => setTimeout(resolve, 1000)); 
      setStatusMessage('Soluções salvas com sucesso!');
    } catch (error) {
      console.error("Erro ao salvar (Soluções):", error);
      setStatusMessage('Erro ao salvar soluções.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">Soluções (Carrossel)</h2>
      
      {/* Lista de Soluções Existentes */}
      <div className="space-y-6">
        {solutions.map((sol) => (
          <div key={sol.id} className="p-4 border rounded-md space-y-3 relative bg-gray-50">
             <button 
                type="button" 
                onClick={() => removeSolution(sol.id)}
                className="absolute top-2 right-2 p-1 text-red-500 hover:text-red-700 hover:bg-red-100 rounded-full transition-colors"
                aria-label="Remover solução"
             >
                <Trash2 size={16}/>
             </button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor={`title-${sol.id}`} className="label-base">Título</label>
                <input type="text" id={`title-${sol.id}`} name="title" value={sol.title} onChange={(e) => handleInputChange(e, sol.id)} className="input-base" placeholder="Use \n para quebra" />
              </div>
              <div>
                <label htmlFor={`href-${sol.id}`} className="label-base">Link (href)</label>
                <input type="text" id={`href-${sol.id}`} name="href" value={sol.href} onChange={(e) => handleInputChange(e, sol.id)} className="input-base" />
              </div>
              <div>
                 <label htmlFor={`category-${sol.id}`} className="label-base">Categoria</label>
                 <select id={`category-${sol.id}`} name="category" value={sol.category} onChange={(e) => handleInputChange(e, sol.id)} className="input-base select-base">
                    <option value="personal">Para você</option>
                    <option value="business">Para sua empresa</option>
                 </select>
              </div>
              <div>
                <label htmlFor={`imageSrc-${sol.id}`} className="label-base">Imagem</label>
                <input type="file" id={`imageSrc-${sol.id}`} name="imageSrc" onChange={(e) => handleFileChange(e, sol.id)} className="input-file-base" accept="image/*"/>
                {sol.imageSrc && <p className="text-xs text-gray-500 mt-1">Atual: {sol.imageSrc}</p>}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Adicionar Nova Solução */}
      <div className="p-4 border rounded-md space-y-4 border-dashed border-orange-400">
        <h3 className="text-lg font-medium text-gray-700">Adicionar Nova Solução</h3>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="new-title" className="label-base">Título</label>
              <input type="text" id="new-title" name="title" value={newSolution.title} onChange={handleNewInputChange} className="input-base" placeholder="Use \n para quebra"/>
            </div>
            <div>
              <label htmlFor="new-href" className="label-base">Link (href)</label>
              <input type="text" id="new-href" name="href" value={newSolution.href} onChange={handleNewInputChange} className="input-base" />
            </div>
            <div>
                <label htmlFor="new-category" className="label-base">Categoria</label>
                <select id="new-category" name="category" value={newSolution.category} onChange={handleNewInputChange} className="input-base select-base">
                  <option value="personal">Para você</option>
                  <option value="business">Para sua empresa</option>
                </select>
            </div>
            <div>
              <label htmlFor="new-imageSrc" className="label-base">Imagem</label>
              <input type="file" id="new-imageSrc" name="imageSrc" onChange={(e) => handleFileChange(e, 'new')} className="input-file-base" accept="image/*"/>
            </div>
        </div>
        <button 
            type="button" 
            onClick={addSolution}
            className="btn-primary bg-green-600 hover:bg-green-700 focus:ring-green-500 flex items-center text-sm"
        >
           <Plus size={16} className="mr-1"/> Adicionar à Lista
        </button>
      </div>

      {/* Botão Salvar Tudo */}
      <div className="pt-6 border-t border-gray-200">
        <button type="submit" disabled={isLoading} className="btn-primary">
          {isLoading ? 'Salvando Todas Soluções...' : 'Salvar Todas as Soluções'}
        </button>
        {statusMessage && <p className={`text-sm mt-2 ${statusMessage.includes('Erro') ? 'text-red-600' : 'text-green-600'}`}>{statusMessage}</p>}
      </div>
    </form>
  );
};

export default SolutionsContentForm;

// Adicione esta classe utilitária ao globals.css se ainda não existir
// .label-base {
//   @apply block text-sm font-medium text-gray-700 mb-1;
// } 