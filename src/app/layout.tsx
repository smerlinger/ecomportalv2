import '@/utils/styles/globals.css';
import { inter, montserrat } from '@/utils/fonts';
import { cn } from '@/utils/styles/classNames';

export const metadata = {
  title: 'Ecomportal',
  description: 'Ecomportal - Job Board',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'min-h-screen antialiased',
          inter.variable,
          montserrat.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
