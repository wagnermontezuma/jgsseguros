'use client';

import React, { useState, FormEvent, useEffect } from 'react';
import Image from 'next/image';
import { Plus, Trash2 } from 'lucide-react';

interface BlogPostItem {
  id: string;
  imageSrc: string;
  category: string;
  date: string; // Manter como string simples por enquanto
  title: string;
  href: string; // Link do post
  // content?: string; // Conteúdo completo do post (opcional aqui, pode estar em outra gestão)
}

// Mock inicial
const initialPosts: BlogPostItem[] = [
  { id: 'blog-1', imageSrc: '/blog-auto.jpg', category: 'Notícias', date: '31/03/2025', title: 'Seguro Auto: Novas Coberturas...', href: '/blog/seguro-auto-novidades' },
  { id: 'blog-2', imageSrc: '/blog-familia.jpg', category: 'Dicas de Seguro', date: '25/03/2025', title: 'Brasileiros Estão Buscando Mais...', href: '/blog/seguranca-financeira' },
  // ...
];

const BlogContentForm = () => {
  const [posts, setPosts] = useState<BlogPostItem[]>(initialPosts);
  const [newPost, setNewPost] = useState<Omit<BlogPostItem, 'id'>>({ imageSrc: '', category: 'Notícias', date: '', title: '', href: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  useEffect(() => {
    // fetch('/api/content/blog').then(res => res.json()).then(data => setPosts(data));
    console.log("Carregando dados iniciais do Blog (simulado)");
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, id: string) => {
    const { name, value } = e.target;
    setPosts(prev => prev.map(post => post.id === id ? { ...post, [name]: value } : post));
  };

  const handleNewInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewPost(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, id: string | 'new') => {
    const file = e.target.files?.[0];
    if (file) {
      console.log(`Arquivo selecionado (Blog ${id}):`, file.name);
      setStatusMessage(`Arquivo ${file.name} selecionado. Implementar upload.`);
      // Simulação: Atualizar imageSrc após upload
    }
  };

  const addPost = () => {
     if (!newPost.title || !newPost.href || !newPost.date || !newPost.category) {
        setStatusMessage("Todos os campos são obrigatórios para adicionar um post.");
        return;
    }
    const newId = `blog-${Date.now()}`;
    setPosts(prev => [...prev, { ...newPost, id: newId }]);
    setNewPost({ imageSrc: '', category: 'Notícias', date: '', title: '', href: '' });
    setStatusMessage("Novo post adicionado (pré-salvamento).");
  };

  const removePost = (id: string) => {
    setPosts(prev => prev.filter(post => post.id !== id));
     setStatusMessage("Post removido (pré-salvamento).");
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage('Salvando Posts do Blog...');
    console.log("Salvando dados (Blog):", posts);

    try {
      // API call para salvar `posts`
      await new Promise(resolve => setTimeout(resolve, 1000)); 
      setStatusMessage('Posts do blog salvos com sucesso!');
    } catch (error) {
      console.error("Erro ao salvar (Blog):", error);
      setStatusMessage('Erro ao salvar posts do blog.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">Blog</h2>
      
      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.id} className="p-4 border rounded-md space-y-3 relative bg-gray-50">
             <button type="button" onClick={() => removePost(post.id)} className="absolute top-2 right-2 p-1 text-red-500 hover:text-red-700 hover:bg-red-100 rounded-full transition-colors" aria-label="Remover post">
                <Trash2 size={16}/>
             </button>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label htmlFor={`title-${post.id}`} className="label-base">Título</label>
                    <input type="text" id={`title-${post.id}`} name="title" value={post.title} onChange={(e) => handleInputChange(e, post.id)} className="input-base" />
                </div>
                 <div>
                    <label htmlFor={`href-${post.id}`} className="label-base">Link (Slug/URL)</label>
                    <input type="text" id={`href-${post.id}`} name="href" value={post.href} onChange={(e) => handleInputChange(e, post.id)} className="input-base" />
                </div>
                <div>
                    <label htmlFor={`category-${post.id}`} className="label-base">Categoria</label>
                    <input type="text" id={`category-${post.id}`} name="category" value={post.category} onChange={(e) => handleInputChange(e, post.id)} className="input-base" />
                </div>
                <div>
                    <label htmlFor={`date-${post.id}`} className="label-base">Data (dd/mm/aaaa)</label>
                    <input type="text" id={`date-${post.id}`} name="date" value={post.date} onChange={(e) => handleInputChange(e, post.id)} className="input-base" />
                </div>
                 <div>
                    <label htmlFor={`imageSrc-${post.id}`} className="label-base">Imagem Destacada</label>
                    <input type="file" id={`imageSrc-${post.id}`} name="imageSrc" onChange={(e) => handleFileChange(e, post.id)} className="input-file-base" accept="image/*"/>
                    {post.imageSrc && <p className="text-xs text-gray-500 mt-1">Atual: {post.imageSrc}</p>}
                </div>
             </div>
          </div>
        ))}
      </div>

      {/* Adicionar Novo Post */}
      <div className="p-4 border rounded-md space-y-4 border-dashed border-orange-400">
        <h3 className="text-lg font-medium text-gray-700">Adicionar Novo Post</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <label htmlFor="new-title" className="label-base">Título</label>
                <input type="text" id="new-title" name="title" value={newPost.title} onChange={handleNewInputChange} className="input-base" />
            </div>
            <div>
                <label htmlFor="new-href" className="label-base">Link (Slug/URL)</label>
                <input type="text" id="new-href" name="href" value={newPost.href} onChange={handleNewInputChange} className="input-base" />
            </div>
            <div>
                <label htmlFor="new-category" className="label-base">Categoria</label>
                <input type="text" id="new-category" name="category" value={newPost.category} onChange={handleNewInputChange} className="input-base" />
            </div>
            <div>
                <label htmlFor="new-date" className="label-base">Data (dd/mm/aaaa)</label>
                <input type="text" id="new-date" name="date" value={newPost.date} onChange={handleNewInputChange} className="input-base" />
            </div>
            <div>
                <label htmlFor="new-imageSrc" className="label-base">Imagem Destacada</label>
                <input type="file" id="new-imageSrc" name="imageSrc" onChange={(e) => handleFileChange(e, 'new')} className="input-file-base" accept="image/*"/>
            </div>
        </div>
         <button type="button" onClick={addPost} className="btn-primary bg-green-600 hover:bg-green-700 focus:ring-green-500 flex items-center text-sm">
           <Plus size={16} className="mr-1"/> Adicionar à Lista
        </button>
      </div>

      {/* Botão Salvar Tudo */}
      <div className="pt-6 border-t border-gray-200">
        <button type="submit" disabled={isLoading} className="btn-primary">
          {isLoading ? 'Salvando Posts...' : 'Salvar Todos os Posts'}
        </button>
        {statusMessage && <p className={`text-sm mt-2 ${statusMessage.includes('Erro') ? 'text-red-600' : 'text-green-600'}`}>{statusMessage}</p>}
      </div>
    </form>
  );
};

export default BlogContentForm; 