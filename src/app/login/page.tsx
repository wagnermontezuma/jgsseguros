'use client'; // Marca o componente inteiro como Cliente

import '@/app/globals.css';
import React, { useState, FormEvent, Suspense, useEffect } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';

// ----- Novo Componente: LoginClientLogic -----
// Componente interno que realmente usa o hook
function LoginFormAndError() {
  const router = useRouter();
  const searchParams = useSearchParams(); // Agora seguro dentro do Suspense
  const initialError = searchParams.get('error'); // Lê o erro inicial da URL

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // Estado de erro começa com o parâmetro da URL, se existir
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Mapeia códigos de erro para mensagens amigáveis (movido para cá)
  const errorMessages: { [key: string]: string } = {
      Configuration: "Erro de configuração de autenticação no servidor.",
      AccessDenied: "Acesso negado.",
      Verification: "O token de verificação expirou ou já foi usado.",
      CredentialsSignin: "Email ou senha inválidos.",
      Default: "Falha no login. Verifique suas credenciais."
      // Adicione outros erros comuns do NextAuth se necessário
  };

  // Define o erro inicial baseado na URL *depois* do componente montar no cliente
  useEffect(() => {
    if (initialError) {
      setError(errorMessages[initialError] || errorMessages.Default);
    }
  }, [initialError]); // Executa quando initialError muda


  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null); // Limpa erro anterior ao tentar novamente
    setIsLoading(true);

    try {
      const result = await signIn('credentials', {
        redirect: false,
        email: email,
        password: password,
      });

      console.log("SignIn Result:", result);

      if (result && !result.error) {
        console.log("Login OK, redirecionando...");
        router.push('/admin/dashboard');
        // Não precisa setIsLoading(false) aqui, a página vai mudar
        return; // Sai da função após redirecionar
      } else {
        // Define o erro baseado no resultado do signIn
        const signInError = result?.error || 'Default';
        setError(errorMessages[signInError] || errorMessages.Default);
        console.error('Login failed:', result?.error);
      }
    } catch (err) {
      console.error("Erro inesperado durante signIn:", err);
      setError("Ocorreu um erro inesperado durante o login.");
    } finally {
        setIsLoading(false); // Garante que isLoading seja false após tentativa
    }
  };

  // O JSX do formulário e do erro vêm para cá
  return (
    <>
      {error && (
        <div className="rounded-md bg-red-50 p-4 mb-4">
          <p className="text-sm text-red-700">{error}</p>
        </div>
      )}
      <form className="space-y-6" onSubmit={handleSubmit}>
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
    </>
  );
}

// Componente exportado que envolve com Suspense
function LoginClientLogic() {
    return (
        <Suspense fallback={<div className="text-center text-gray-500 p-4">Carregando...</div>}> {/* Suspense aqui */}
             <LoginFormAndError />
        </Suspense>
    )
}

// ----- Página Principal LoginPage -----
// Pode até não precisar mais ser 'use client'
export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <Image src="/logo.png" alt="JGS Seguros" width={150} height={75} className="mx-auto mb-4" />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Acessar Painel Administrativo
          </h2>
        </div>
        <div className="mt-8 bg-white p-8 rounded-lg shadow-md">
          {/* Renderizamos o componente que contém Suspense e a lógica cliente */}
          <LoginClientLogic />
        </div>
      </div>
    </div>
  );
} 