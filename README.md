# Site JGS - Inteligência nas Soluções de Seguros

Este é o repositório do site institucional da JGS Corretores de Seguros, desenvolvido com Next.js, TypeScript e Tailwind CSS.

## Visão Geral

O projeto visa apresentar a JGS, seus serviços, diferenciais e facilitar o contato com potenciais clientes através de um design moderno e responsivo. Inclui seções como Quem Somos, Soluções (Pessoais e Empresariais), Blog, FAQ, Parceiros e uma ferramenta de Simulação de Seguros.

**Status Atual:** A funcionalidade de autenticação do painel administrativo (`/admin`) está em desenvolvimento e apresenta um problema conhecido: as variáveis de ambiente `NEXTAUTH_SECRET` e `NEXTAUTH_URL` não estão sendo carregadas corretamente do arquivo `.env.local`, impedindo o login. Este problema precisa ser resolvido localmente antes que a autenticação funcione.

## Tecnologias Utilizadas

*   **Frontend:**
    *   [Next.js](https://nextjs.org/) (v14+) - React Framework
    *   [React](https://reactjs.org/) (v18+) - Biblioteca UI
    *   [TypeScript](https://www.typescriptlang.org/) - Superset tipado do JavaScript
    *   [Tailwind CSS](https://tailwindcss.com/) - Framework CSS Utility-First
    *   [Lucide React](https://lucide.dev/) - Ícones SVG
    *   [Embla Carousel React](https://www.embla-carousel.com/) - Carrossel leve
    *   [Radix UI (Accordion, Tabs)](https://www.radix-ui.com/) - Primitivos UI acessíveis
*   **Autenticação (Painel Admin):**
    *   [NextAuth.js](https://next-auth.js.org/) (v4)
*   **Linting/Formatting:**
    *   ESLint
    *   Prettier (implícito via extensões ESLint)

## Primeiros Passos

Para rodar o projeto localmente, siga estas etapas:

1.  **Clone o repositório:**
    ```bash
    git clone <URL_DO_REPOSITORIO>
    cd SiteJGS
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    # ou
    yarn install
    # ou
    pnpm install
    ```

3.  **Configure as Variáveis de Ambiente:**
    *   Crie um arquivo chamado `.env.local` na **raiz** do projeto.
    *   Gere uma chave secreta forte para o NextAuth:
        ```bash
        openssl rand -base64 32
        ```
    *   Adicione o seguinte conteúdo ao `.env.local`, substituindo pela chave gerada:
        ```env
        # .env.local
        NEXTAUTH_SECRET="SUA_CHAVE_SECRETA_GERADA_AQUI"
        NEXTAUTH_URL="http://localhost:3000"

        # Adicione outras variáveis se necessário (ex: API Keys, etc.)
        ```
    *   **Importante:** Este arquivo `.env.local` **não deve** ser commitado no Git (verifique seu `.gitignore`).

4.  **Rode o servidor de desenvolvimento:**
    ```bash
    npm run dev
    # ou
    yarn dev
    # ou
    pnpm dev
    ```

5.  Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o site.

## Scripts Disponíveis

*   `npm run dev`: Inicia o servidor de desenvolvimento.
*   `npm run build`: Gera a build de produção otimizada.
*   `npm run start`: Inicia o servidor de produção (requer `npm run build` antes).
*   `npm run lint`: Executa o linter (ESLint).

## Estrutura do Projeto (Simplificada)

```
.
├── public/          # Arquivos estáticos (imagens, fontes)
├── src/
│   ├── app/         # Rotas do App Router (páginas, layouts, API routes)
│   │   ├── api/
│   │   │   └── auth/
│   │   │       └── [...nextauth]/ # Rota do NextAuth
│   │   ├── (admin)/ # Rotas do painel administrativo (agrupadas)
│   │   ├── (site)/  # Rotas do site principal (agrupadas)
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/  # Componentes React reutilizáveis
│   │   ├── admin/   # Componentes específicos do painel admin
│   │   └── ui/      # Componentes UI genéricos (ex: Button, Card)
│   ├── lib/         # Funções utilitárias, configurações (ex: auth.ts)
│   └── styles/      # Estilos globais (globals.css)
├── .env.local       # Variáveis de ambiente locais (NÃO COMMITAR)
├── .eslintrc.js     # Configuração do ESLint
├── .gitignore       # Arquivos/pastas ignorados pelo Git
├── next.config.mjs  # Configuração do Next.js
├── package.json     # Dependências e scripts
├── postcss.config.js # Configuração do PostCSS (para Tailwind)
├── tailwind.config.ts # Configuração do Tailwind CSS
└── tsconfig.json    # Configuração do TypeScript
```

## Contribuição

Contribuições são bem-vindas! Por favor, abra uma issue para discutir mudanças significativas antes de criar um pull request.

## Licença

Este projeto é de propriedade da JGS Corretores de Seguros. Todos os direitos reservados. 
