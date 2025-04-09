import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// Log temporário para depuração
console.log("--- Verificando .env DENTRO de auth.ts ---");
console.log("NEXTAUTH_SECRET (auth.ts):", process.env.NEXTAUTH_SECRET ? "Carregada!" : "NÃO CARREGADA!");
console.log("--- Fim Verificação (auth.ts) ---");

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "seu@email.com" },
        password: { label: "Senha", type: "password" }
      },
      async authorize(credentials, req) {
        // Exemplo **MOCK** (SUBSTITUA PELA SUA LÓGICA REAL):
        if (credentials?.email === "admin@jgs.com" && credentials?.password === "senha123") {
          // Retorne um objeto com os dados do usuário que você quer na sessão
          return { id: "1", name: "Admin JGS", email: "admin@jgs.com" };
        } else {
          // Se as credenciais forem inválidas, retorne null
          return null;
        }
      }
    })
  ],
  session: {
    strategy: "jwt", // Usar JWT para sessão
  },
  pages: {
    signIn: '/login', // Página de login personalizada
    error: '/login',  // Página de erro (ex: credenciais inválidas)
  },
  callbacks: {
    async jwt({ token, user }) {
      // Adiciona ID ao token se o usuário existir (no login)
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      // Adiciona ID à sessão a partir do token
      if (session.user && token.id) {
        (session.user as any).id = token.id;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET, // Lê a chave secreta do ambiente
}; 