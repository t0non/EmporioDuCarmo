
import type { Metadata } from 'next';
import { Instrument_Sans, Montserrat } from 'next/font/google';
import './globals.css';

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-instrument-sans',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Armazém e Empório Du Carmo | Tradição Mineira no Santo Agostinho',
  description: 'O sabor da tradição mineira no coração de BH. Cafés especiais, pão de queijo xodó de Minas e cestas exclusivas. Visite-nos no bairro Santo Agostinho.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${instrumentSans.variable} ${montserrat.variable}`}>
      <head>
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
