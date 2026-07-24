import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'HP Academy',
  description: 'Aprenda Matemática Financeira com HP 12C',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
