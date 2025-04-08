import React from 'react';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contato" className="py-16 md:py-24 bg-blue-700 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Fale com a gente
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Formulário de Contato */}
          <form className="bg-white p-8 rounded-lg shadow-lg text-gray-800">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
              <input type="text" id="name" name="name" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
              <input type="email" id="email" name="email" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefone <span className="text-xs text-gray-500">(Opcional)</span></label>
              <input type="tel" id="phone" name="phone" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
              <textarea id="message" name="message" rows={4} required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            >
              Enviar Mensagem
            </button>
          </form>

          {/* Informações de Contato */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">Nossos Contatos</h3>
            <div className="flex items-start space-x-4">
              <MapPin size={24} className="mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Endereço</h4>
                <p>Rua Exemplo, 123 - Bairro Exemplo<br />Cidade - Estado, CEP 00000-000</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <MessageSquare size={24} className="mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">WhatsApp</h4>
                <a href="https://wa.me/55XXXXXXXXXXX" target="_blank" rel="noopener noreferrer" className="hover:text-orange-300 transition-colors">(XX) XXXXX-XXXX</a>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Phone size={24} className="mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Telefone</h4>
                <a href="tel:+55XXXXXXXXXXX" className="hover:text-orange-300 transition-colors">(XX) XXXX-XXXX</a>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Mail size={24} className="mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">E-mail</h4>
                <a href="mailto:contato@jgsseguros.com.br" className="hover:text-orange-300 transition-colors">contato@jgsseguros.com.br</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 