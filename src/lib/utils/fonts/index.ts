import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const montserrat = localFont({
  src: [
    {
      path: './Montserrat-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './Montserrat-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: './Montserrat-ExtraLight.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: './Montserrat-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './Montserrat-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './Montserrat-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Montserrat-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './Montserrat-Thin.ttf',
      weight: '100',
      style: 'normal',
    },
  ],
  variable: '--font-montserrat',
  display: 'swap',
});
