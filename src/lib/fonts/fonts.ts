import { Nunito_Sans } from 'next/font/google';
import localFont from 'next/font/local';

export const proxima = localFont({
  src: [
    {
      path: 'proxima-300.woff2',
      weight: '300',
      style: 'normal'
    },

    {
      path: 'proxima-regular.woff',
      weight: '400',
      style: 'normal'
    },

    {
      path: 'proxima-500.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: 'proxima-600.woff2',
      weight: '600',
      style: 'normal'
    },
    {
      path: 'proxima-700.woff2',
      weight: '700',
      style: 'normal'
    },
    {
      path: 'proxima-900.woff2',
      weight: '900',
      style: 'normal'
    }
  ]
});

export const nunitoSans = Nunito_Sans({
  weight: ['300', '400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-nunitoSans',
  display: 'swap'
});
