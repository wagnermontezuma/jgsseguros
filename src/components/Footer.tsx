import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Linkedin } from 'lucide-react'; // Ícones de redes sociais

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo e Descrição */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo-white.png" // Use um logo branco para fundo escuro
                alt="JGS Corretores de Seguros"
                width={130}
                height={65}
                className="h-auto"
              />
            </Link>
            <p className="text-sm">Sua tranquilidade, nossa prioridade. Seguros de viagem e mais.</p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-orange-400 transition-colors">Home</Link></li>
              <li><Link href="#a-jgs" className="hover:text-orange-400 transition-colors">A JGS</Link></li>
              <li><Link href="#para-voce" className="hover:text-orange-400 transition-colors">Para Você</Link></li>
              <li><Link href="#para-sua-empresa" className="hover:text-orange-400 transition-colors">Para sua Empresa</Link></li>
              <li><Link href="#contato" className="hover:text-orange-400 transition-colors">Contatos</Link></li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Siga-nos</h4>
            <div className="flex space-x-4">
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Informações Legais */}
        <div className="border-t border-gray-700 pt-8 text-center text-sm">
          <p>JGS Corretores de Seguros LTDA - CNPJ: 00.000.000/0001-00</p>
          <p>&copy; {currentYear} JGS Seguros. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 