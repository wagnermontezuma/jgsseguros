import React from 'react';
import Link from 'next/link';

const CommitmentBar = () => {
  return (
    <div className="bg-white border-t border-b border-gray-200 py-4">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800 mb-3 md:mb-0 mr-auto">
          Transparência e comprometimento
        </h3>
        <nav className="flex flex-wrap justify-center md:justify-end space-x-4 md:space-x-6 text-sm text-gray-600">
          <Link href="/codigo-etica" className="hover:text-orange-600 transition-colors">Código de Ética</Link>
          <Link href="/politica-privacidade" className="hover:text-orange-600 transition-colors">Política de Privacidade</Link>
          <Link href="/responsabilidade-social" className="hover:text-orange-600 transition-colors">Responsabilidade Social</Link>
          <Link href="/sustentabilidade" className="hover:text-orange-600 transition-colors">Sustentabilidade</Link>
        </nav>
      </div>
    </div>
  );
};

export default CommitmentBar; 