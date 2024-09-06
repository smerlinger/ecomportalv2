// components/Layout.tsx
import { ReactNode } from 'react';
import { Banner } from '@/components/atoms/Banner';
import { Header } from '@/components/organisms/Header';
import { Footer } from '@/components/organisms/Footer';
import styles from './Layout.module.css';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.wrapper}>
      <Banner />
      <div className={styles.container}>
        <Header />
        <div className={styles.padding}>
          <main className={styles.main}>{children}</main>
        </div>
      </div>
      <Footer />
    </div>
  );
};
