'use client';

import { LogoImage } from '@/components/atoms/LogoImage';
import { HeaderDropDown } from '@/components/molecules/HeaderDropDown';
import { MobileMenuButton } from '@/components/molecules/MobileMenuButton';
import { ArrowCircleRight } from '@phosphor-icons/react';
import { Button, IconButton } from '@radix-ui/themes';
import { useRouter } from 'next/navigation';
import styles from './header.module.css';

export const Header = () => {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.primaryItems}>
          <LogoImage />
          <Button className={styles.button}>Salary Stats</Button>
          <Button
            className={styles.button}
            onClick={() => router.push('/interviews')}
          >
            Interviews
          </Button>
          <HeaderDropDown />
        </div>
        <div className={styles.secondaryItems}>
          <MobileMenuButton />
          <Button className={styles.button}>Log In</Button>
          <Button className={styles.button}>Contact Us</Button>
          <IconButton
            className={styles.iconButton}
            onClick={() => router.push('/post-a-job')}
          >
            Post a Job <ArrowCircleRight size="1.5rem" />
          </IconButton>
        </div>
      </div>
    </header>
  );
};
