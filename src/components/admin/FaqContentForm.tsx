'use client';

import React, { useState, FormEvent, useEffect } from 'react';
import { Plus, Trash2 } from 'lucide-react';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

// Mock inicial
const initialFaqs: FaqItem[] = [
  { id: 'faq-1', question: 'Por que devo contratar um seguro?', answer: 'Contratar um seguro oferece proteção financeira...' },
  { id: 'faq-2', question: 'Quais tipos de seguros a JGS oferece?', answer: 'A JGS oferece uma ampla gama de seguros...' },
  // ... adicionar outros mocks
];

const FaqContentForm = () => {
  const [faqs, setFaqs] = useState<FaqItem[]>(initialFaqs);
  const [newFaq, setNewFaq] = useState<Omit<FaqItem, 'id'>>({ question: '', answer: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  useEffect(() => {
    // fetch('/api/content/faqs').then(res => res.json()).then(data => setFaqs(data));
    console.log("Carregando dados iniciais do FAQ (simulado)");
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, id: string) => {
    const { name, value } = e.target;
    setFaqs(prev => prev.map(faq => faq.id === id ? { ...faq, [name]: value } : faq));
  };

  const handleNewInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewFaq(prev => ({ ...prev, [name]: value }));
  };

  const addFaq = () => {
     if (!newFaq.question || !newFaq.answer) {
        setStatusMessage("Pergunta e Resposta são obrigatórias para adicionar.");
        return;
    }
    const newId = `faq-${Date.now()}`;
    setFaqs(prev => [...prev, { ...newFaq, id: newId }]);
    setNewFaq({ question: '', answer: '' });
    setStatusMessage("Nova FAQ adicionada (pré-salvamento).");
  };

  const removeFaq = (id: string) => {
    setFaqs(prev => prev.filter(faq => faq.id !== id));
     setStatusMessage("FAQ removida (pré-salvamento).");
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage('Salvando FAQs...');
    console.log("Salvando dados (FAQs):", faqs);

    try {
      // API call para salvar `faqs`
      await new Promise(resolve => setTimeout(resolve, 1000)); 
      setStatusMessage('FAQs salvas com sucesso!');
    } catch (error) {
      console.error("Erro ao salvar (FAQs):", error);
      setStatusMessage('Erro ao salvar FAQs.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">Dúvidas Frequentes (FAQ)</h2>
      
      <div className="space-y-6">
        {faqs.map((faq) => (
          <div key={faq.id} className="p-4 border rounded-md space-y-3 relative bg-gray-50">
            <button 
                type="button" 
                onClick={() => removeFaq(faq.id)}
                className="absolute top-2 right-2 p-1 text-red-500 hover:text-red-700 hover:bg-red-100 rounded-full transition-colors"
                aria-label="Remover FAQ"
             >
                <Trash2 size={16}/>
             </button>
            <div>
              <label htmlFor={`question-${faq.id}`} className="label-base">Pergunta</label>
              <input type="text" id={`question-${faq.id}`} name="question" value={faq.question} onChange={(e) => handleInputChange(e, faq.id)} className="input-base" />
            </div>
            <div>
              <label htmlFor={`answer-${faq.id}`} className="label-base">Resposta</label>
              <textarea id={`answer-${faq.id}`} name="answer" rows={3} value={faq.answer} onChange={(e) => handleInputChange(e, faq.id)} className="input-base" />
            </div>
          </div>
        ))}
      </div>

      {/* Adicionar Nova FAQ */}
      <div className="p-4 border rounded-md space-y-4 border-dashed border-orange-400">
        <h3 className="text-lg font-medium text-gray-700">Adicionar Nova Pergunta</h3>
        <div>
            <label htmlFor="new-question" className="label-base">Pergunta</label>
            <input type="text" id="new-question" name="question" value={newFaq.question} onChange={handleNewInputChange} className="input-base" />
        </div>
        <div>
            <label htmlFor="new-answer" className="label-base">Resposta</label>
            <textarea id="new-answer" name="answer" rows={3} value={newFaq.answer} onChange={handleNewInputChange} className="input-base" />
        </div>
         <button 
            type="button" 
            onClick={addFaq}
            className="btn-primary bg-green-600 hover:bg-green-700 focus:ring-green-500 flex items-center text-sm"
        >
           <Plus size={16} className="mr-1"/> Adicionar à Lista
        </button>
      </div>

      {/* Botão Salvar Tudo */}
      <div className="pt-6 border-t border-gray-200">
        <button type="submit" disabled={isLoading} className="btn-primary">
          {isLoading ? 'Salvando FAQs...' : 'Salvar Todas as FAQs'}
        </button>
        {statusMessage && <p className={`text-sm mt-2 ${statusMessage.includes('Erro') ? 'text-red-600' : 'text-green-600'}`}>{statusMessage}</p>}
      </div>
    </form>
  );
};

export default FaqContentForm; 