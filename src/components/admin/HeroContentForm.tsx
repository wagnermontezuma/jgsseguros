'use client';

import React, { useState, FormEvent, useEffect } from 'react';

// Tipo dos dados do Hero para o formulário
interface HeroFormData {
  title: string;
  subtitle: string;
  backgroundType: 'image' | 'video' | 'gif';
  backgroundSrc: string;
}

interface HeroContentFormProps {
  // Props para carregar dados iniciais e salvar, se necessário
}

const HeroContentForm: React.FC<HeroContentFormProps> = () => {
  // Estado inicial (poderia vir de uma API no futuro)
  const [formData, setFormData] = useState<HeroFormData>({
    title: 'JGS seu companheiro\nde viagem', // Usar \n para quebras de linha
    subtitle: 'Em todas as fases da vida com você',
    backgroundType: 'image',
    backgroundSrc: '/sunset-beach.png',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  // Carregar dados iniciais (simulado)
  useEffect(() => {
    // No futuro: fetch('/api/content/hero').then(res => res.json()).then(data => setFormData(data));
    console.log("Carregando dados iniciais do Hero (simulado)");
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      console.log("Arquivo selecionado (Hero):", file.name);
      setStatusMessage(`Arquivo ${file.name} selecionado. Implementar upload.`);
      // Simulação: setFormData(prev => ({ ...prev, backgroundSrc: `/uploads/${file.name}` }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage('Salvando Hero...');
    console.log("Salvando dados (Hero):", formData);

    try {
      // Simula API call
      await new Promise(resolve => setTimeout(resolve, 1000)); 
      setStatusMessage('Conteúdo do Hero salvo com sucesso!');
    } catch (error) {
      console.error("Erro ao salvar (Hero):", error);
      setStatusMessage('Erro ao salvar conteúdo do Hero.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">Banner Principal (Hero)</h2>
      {/* Título */}
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Título Principal</label>
        <textarea id="title" name="title" rows={2} value={formData.title} onChange={handleChange} className="w-full input-base" placeholder="Use \n para quebra de linha" />
      </div>
      {/* Subtítulo */}
      <div>
        <label htmlFor="subtitle" className="block text-sm font-medium text-gray-700 mb-1">Subtítulo</label>
        <input type="text" id="subtitle" name="subtitle" value={formData.subtitle} onChange={handleChange} className="w-full input-base" />
      </div>
      {/* Tipo de Fundo */}
      <div>
        <label htmlFor="backgroundType" className="block text-sm font-medium text-gray-700 mb-1">Tipo do Fundo</label>
        <select id="backgroundType" name="backgroundType" value={formData.backgroundType} onChange={handleChange} className="w-full input-base select-base">
          <option value="image">Imagem</option>
          <option value="video">Vídeo</option>
          <option value="gif">GIF</option>
        </select>
      </div>
      {/* Arquivo de Fundo */}
      <div>
        <label htmlFor="backgroundFile" className="block text-sm font-medium text-gray-700 mb-1">Arquivo de Fundo</label>
        <input type="file" id="backgroundFile" name="backgroundFile" onChange={handleFileChange} className="input-file-base" accept="image/*,video/mp4,video/webm" />
        {formData.backgroundSrc && (
            <p className="text-xs text-gray-500 mt-1">Atual: {formData.backgroundSrc} {formData.backgroundType === 'video' ? '(Vídeo)' : '(Imagem/GIF)'}</p>
        )}
        <p className="text-xs text-gray-500 mt-1">Selecione um novo arquivo para substituir o atual. Upload a implementar.</p>
      </div>
      {/* Botão Salvar */}
      <div className="pt-4 border-t border-gray-200">
        <button type="submit" disabled={isLoading} className="btn-primary">
          {isLoading ? 'Salvando...' : 'Salvar Hero'}
        </button>
        {statusMessage && <p className={`text-sm mt-2 ${statusMessage.includes('Erro') ? 'text-red-600' : 'text-green-600'}`}>{statusMessage}</p>}
      </div>
    </form>
  );
};

export default HeroContentForm; 