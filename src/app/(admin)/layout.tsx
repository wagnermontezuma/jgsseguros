'use client';

import '@/app/globals.css';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, FileText, ShieldCheck, Users, Lock, LogOut } from 'lucide-react';

// Metadata (pode ser ajustada por página também)
// export const metadata = {
//   title: 'Admin JGS Seguros',
// };

interface NavLinkProps {
  href: string;
  icon: React.ElementType;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, icon: Icon, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`flex items-center px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
        isActive
          ? 'bg-orange-100 text-orange-700'
          : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
      }`}
    >
      <Icon className="mr-3 h-5 w-5 flex-shrink-0" />
      {children}
    </Link>
  );
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 flex-shrink-0 border-r border-gray-200 bg-white flex flex-col">
        <div className="h-16 flex items-center justify-center px-4 border-b border-gray-200">
          {/* Pode adicionar o logo aqui */}
          <span className="text-xl font-semibold text-gray-800">Admin JGS</span>
        </div>
        <nav className="flex-1 overflow-y-auto p-4 space-y-1">
          <NavLink href="/admin/dashboard" icon={LayoutDashboard}>Dashboard</NavLink>
          <NavLink href="/admin/content" icon={FileText}>Gerenciar Conteúdo</NavLink>
          <NavLink href="/admin/permissions" icon={ShieldCheck}>Gerenciar Permissões</NavLink>
          <NavLink href="/admin/users" icon={Users}>Gerenciar Usuários</NavLink>
          <NavLink href="/admin/change-password" icon={Lock}>Alterar Senha</NavLink>
        </nav>
        <div className="p-4 border-t border-gray-200">
          <button
            // onClick={handleLogout} // Adicionar lógica de logout
            className="flex w-full items-center px-4 py-2.5 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 transition-colors"
          >
            <LogOut className="mr-3 h-5 w-5 flex-shrink-0" />
            Sair
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto">
        {/* Pode adicionar um Header aqui se necessário */}
        <div className="p-6 md:p-8">
          {children}
        </div>
      </main>
    </div>
  );
} 