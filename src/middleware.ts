export { default } from "next-auth/middleware"

export const config = {
    // Define as rotas que devem ser protegidas pelo middleware
    matcher: [
        '/admin/dashboard/:path*', 
        '/admin/content/:path*',
        '/admin/permissions/:path*',
        '/admin/users/:path*',
        '/admin/change-password/:path*',
        // Adicione aqui outras rotas admin que precisam de proteção
        // Certifique-se de NÃO incluir /admin/login aqui!
    ],
}; 