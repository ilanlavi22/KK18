import type { Metadata } from 'next';
import { proxima, nunitoSans } from '@/lib/fonts/fonts';
import './globals.css';

import NavUpper from '../app/components/NavUpper';
import Nav from './components/Nav';

export const metadata: Metadata = {
  title: 'Kommunikationskongress 2018',
  description:
    'Das Gipfeltreffen der Kommunikationsbranche findet am 27. und 28. September in Berlin statt. Netzwerken mit mehr als 1.500 professionellen Kommunikationsverantwortlichen, offener Austausch zu aktuellen Herausforderungen und die legendäre Speakersnight sprechen unter anderem für eine Teilnahme. Jetzt Ticket sichern!'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='de-DE'
      dir='ltr'
      className={`${proxima.className} ${nunitoSans.className}`}
    >
      <body className={`${proxima.className}`}>
        <NavUpper />
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  );
}
