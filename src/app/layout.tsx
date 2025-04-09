import './globals.css'
import type { Metadata } from 'next'
import AuthProvider from '@/components/AuthProvider'

export const metadata: Metadata = {
  title: 'JGS Corretores de Seguros',
  description: 'Seu companheiro de viagem em todas as fases da vida',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
