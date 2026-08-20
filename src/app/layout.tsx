import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Vivid Frame Studio | Creative that moves people',
  description: 'A cinematic editing and creative production studio.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
