'use client';

import { IconButton } from '@mui/material';
import { ArrowFatLinesLeft } from '@phosphor-icons/react';
import { useRouter } from 'next/navigation';
import styles from './jobDetailGoBackButton.module.css';

export const JobDetailGoBackButton = () => {
  const router = useRouter();
  return (
    <IconButton className={styles.iconButton} onClick={() => router.back()}>
      <ArrowFatLinesLeft />
      {'Back to search results'}
    </IconButton>
  );
};
