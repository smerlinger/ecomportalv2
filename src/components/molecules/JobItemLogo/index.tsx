'use client';

import styles from './jobItemLogo.module.css';
import Image from 'next/image';
import { useState } from 'react';

interface JobItemLogoProps {
  logo: string;
  companyName: string;
}

export const JobItemLogo = ({ logo, companyName }: JobItemLogoProps) => {
  const getJobLogo = (): string => {
    return logo.startsWith('data:image/')
      ? logo
      : `https://ecomportal-images.storage.googleapis.com/images/${logo}`;
  };
  const [useFallback, setUseFallback] = useState<boolean>(false);

  const fallbackImage = () => {
    const initials: string = companyName
      .split(' ')
      .map((word) => word[0].toUpperCase())
      .join('');
    return <div className={styles.fallbackImage}>{initials}</div>;
  };

  return (
    <div className={styles.logo}>
      {useFallback ? (
        fallbackImage()
      ) : (
        <Image
          src={getJobLogo()}
          width={100}
          height={100}
          alt="job item logo"
          className={styles.image}
          onError={() => setUseFallback(true)}
        />
      )}
    </div>
  );
};
