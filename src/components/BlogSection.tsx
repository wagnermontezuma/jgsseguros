import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';

interface BlogPostCardProps {
  imageSrc: string;
  category: string;
  date: string;
  title: string;
  href: string;
}

const blogPostsData: BlogPostCardProps[] = [
  {
    imageSrc: '/blog-auto.jpg',
    category: 'Notícias',
    date: '31/03/2025',
    title: 'Seguro Auto: Novas Coberturas para Proteção Completa!',
    href: '/blog/seguro-auto-novidades',
  },
  {
    imageSrc: '/blog-familia.jpg',
    category: 'Dicas de Seguro',
    date: '25/03/2025',
    title: 'Brasileiros Estão Buscando Mais Segurança Financeira',
    href: '/blog/seguranca-financeira',
  },
  {
    imageSrc: '/blog-empresa.jpg',
    category: 'Notícias',
    date: '15/03/2025',
    title: 'Seguro Empresarial: Como Proteger Seu Negócio Contra Prejuízos?',
    href: '/blog/seguro-empresarial-protecao',
  },
  {
    imageSrc: '/blog-investimento.jpg',
    category: 'Dicas de Seguro',
    date: '21/02/2025',
    title: 'Um Pequeno Investimento Que Faz Toda a Diferença',
    href: '/blog/pequeno-investimento',
  },
];

const BlogPostCard: React.FC<BlogPostCardProps> = ({ imageSrc, category, date, title, href }) => (
  <div className="flex flex-col bg-white rounded-lg overflow-hidden shadow-md group h-full">
    <div className="relative aspect-[16/10]">
      <Image
        src={imageSrc}
        alt={title}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <span className="absolute bottom-3 left-3 bg-white text-gray-800 px-3 py-1 rounded text-xs font-semibold shadow">
        {category}
      </span>
    </div>
    <div className="p-5 flex flex-col flex-grow">
      <div className="flex items-center text-gray-500 text-xs mb-2">
        <Calendar size={14} className="mr-1.5" />
        <span>{date}</span>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-3 flex-grow">
        <Link href={href} className="hover:text-orange-600 transition-colors">
          {title}
        </Link>
      </h3>
      <div className="mt-auto pt-3 border-t border-gray-100">
        <Link href={href} className="inline-flex items-center text-sm font-medium text-orange-600 hover:text-orange-700 transition-colors">
          Continue lendo
          <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
    </div>
  </div>
);

const BlogSection = () => {
  return (
    <section id="blog" className="py-16 md:py-24 bg-orange-600 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div>
            <p className="text-sm uppercase tracking-wider text-orange-200 mb-1">Notícias e Dicas</p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Blog JGS
            </h2>
          </div>
          <Link
            href="/blog"
            className="mt-4 md:mt-0 inline-block bg-white text-orange-600 px-6 py-2 rounded-md text-sm font-semibold hover:bg-gray-100 transition-colors shadow-md flex-shrink-0"
          >
            Ver mais notícias
          </Link>
        </div>

        {/* Grid de Posts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogPostsData.map((post) => (
            <BlogPostCard key={post.title} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection; 