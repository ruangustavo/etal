import { type Metadata } from 'next'
import { DM_Sans, Inter } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-dm-sans',
})

export const metadata: Metadata = {
  title: {
    template: '%s - ETAL',
    default: 'ETAL - Encontro de Tecnologia do Alto Oeste Potiguar',
  },
  description: 'Participe do ETAL 2024 - 15 Anos de IFRN: Inovação, Crescimento e Tecnologias Impactando Vidas. Programa com minicursos, competição de jogos, apresentações culturais e muito mais de 27 a 29 de dezembro. Celebre 15 anos de transformação no IFRN.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full bg-white antialiased',
        inter.variable,
        dmSans.variable,
      )}
    >
      <body className="flex min-h-full">
        <div className="flex w-full flex-col">{children}</div>
      </body>
    </html>
  )
}
