'use client';

import '@/app/globals.css';
import React, { useState, FormEvent } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(searchParams.get('error'));
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const result = await signIn('credentials', {
        redirect: false,
        email: email,
        password: password,
      });

      console.log("SignIn Result:", result); // Log para depuração

      // ---- Simplificação Temporária para Teste ----
      if (result && !result.error) {
        console.log("Login aparentemente OK, tentando redirecionar...");
        router.push('/admin/dashboard');
        // Não precisa de router.refresh() geralmente com push
      } else {
        let errorMessage = 'Credenciais inválidas ou erro inesperado.';
        if (result?.error === 'Configuration') {
          errorMessage = 'Erro de configuração de autenticação.';
        } else if (result?.error) {
          errorMessage = `Erro: ${result.error}`;
        }
        setError(errorMessage);
        console.error('Login failed:', result?.error);
        setIsLoading(false); // Garante que o botão reative em caso de erro
      }
      // ---- Fim da Simplificação ----

    } catch (err) {
      console.error("Erro inesperado durante signIn:", err);
      setError("Ocorreu um erro inesperado durante o login.");
      setIsLoading(false);
    }

    // Não colocamos setIsLoading(false) aqui se o redirecionamento ocorrer
    // A página será descarregada de qualquer forma.
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          {/* Pode colocar o logo aqui */}
          <Image src="/logo.png" alt="JGS Seguros" width={150} height={75} className="mx-auto mb-4" />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Acessar Painel Administrativo
          </h2>
        </div>
        <form className="mt-8 space-y-6 bg-white p-8 rounded-lg shadow-md" onSubmit={handleSubmit}>
          {error && (
            <div className="rounded-md bg-red-50 p-4 mb-4">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          )}
          <div className="space-y-4 rounded-md shadow-sm">
            <div>
              <label htmlFor="email-address" className="sr-only">Email</label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-orange-500 focus:outline-none focus:ring-orange-500 sm:text-sm"
                placeholder="Email"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Senha</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-orange-500 focus:outline-none focus:ring-orange-500 sm:text-sm"
                placeholder="Senha"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-orange-500 py-2 px-4 text-sm font-medium text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:opacity-50"
            >
              {isLoading ? 'Entrando...' : 'Entrar'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 