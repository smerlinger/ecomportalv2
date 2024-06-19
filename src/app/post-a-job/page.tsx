'use client';

import { Banner } from '@/components/atoms/Banner';
import { Typography } from '@/components/atoms/Typography';
import { Footer } from '@/components/organisms/Footer';
import { Header } from '@/components/organisms/Header';
import { IconButton, Text } from '@radix-ui/themes';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';

export default function Page() {
  const router = useRouter();

  return (
    <div className={styles.wrapper}>
      <Banner />
      <div className={styles.container}>
        <Header />
        <div className={styles.headingContainer}>
          <Text className={styles.heading}>
            Hire the best talent across the eCommerce industry
          </Text>
          <IconButton
            className={styles.postAJobButton}
            onClick={() => router.push('/post-a-job')}
          >
            Post A Job
          </IconButton>
          <Text>
            Save up to 50% off -{' '}
            <Link href={'/'}>
              <Text className={styles.buyABundle}>Buy a Bundle</Text>
            </Link>
          </Text>
          <ul>
            <li>
              <Typography variant="body-small" color="#111827">
                Reach Candidates with DTC Experience
              </Typography>
            </li>
            <li>
              <Typography variant="body-small" color="#111827">
                Distributed Across Google Jobs Network
              </Typography>
            </li>
            <li>
              <Typography variant="body-small" color="#111827">
                Reach Our Highly Targeted Email List
              </Typography>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
