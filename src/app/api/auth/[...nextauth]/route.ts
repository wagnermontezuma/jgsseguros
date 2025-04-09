import NextAuth from "next-auth";
import { authOptions } from "@/lib/auth"; // Verifique se esse caminho está correto

// Log para verificar variáveis de ambiente (APENAS PARA DIAGNÓSTICO)
console.log("--- Verificando Variaveis de Ambiente --- ");
console.log("NEXTAUTH_SECRET:", process.env.NEXTAUTH_SECRET ? "Carregada" : "NÃO CARREGADA!");
console.log("NEXTAUTH_URL:", process.env.NEXTAUTH_URL ? process.env.NEXTAUTH_URL : "NÃO CARREGADA!");
console.log("--- Fim Verificação ---");

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }; 