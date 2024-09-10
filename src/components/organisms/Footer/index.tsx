'use client';

import Image from 'next/image';
import styles from './footer.module.css';
import { useRouter } from 'next/navigation';
import logo from '../../../../public/logo/logoFooter.png';
import { LinkedinLogo, MetaLogo, TwitterLogo } from '@phosphor-icons/react';
import React from 'react';
import { FooterCityList, FooterJobList } from '@/lib/constants/FooterItemList';
import Link from 'next/link';
import { SocialMediaButton } from '@/components/molecules/SocialMediaButton';

export const Footer = () => {
  const router = useRouter();

  return (
    <footer className={styles.footer}>
      <div className={styles.mainContainer}>
        <Image alt={'footer logo'} src={logo} className={styles.logo} />
        <div>The #1 Job Board for D2C Brands</div>
        <div className={styles.socialMediaContainer}>
          <SocialMediaButton
            icon={<MetaLogo size="1.5rem" weight="bold" />}
            link={'https://www.facebook.com/ecomprtal'}
          />
          <SocialMediaButton
            icon={<TwitterLogo size="1.5rem" weight="bold" />}
            link={'https://twitter.com/ecomprtal'}
          />
          <SocialMediaButton
            icon={<LinkedinLogo size="1.5rem" weight="bold" />}
            link={'https://www.linkedin.com/company/ecomportal'}
          />
        </div>
      </div>
      <div className={styles.listContainer}>
        <div className={styles.listTitle}>Search Jobs</div>
        {FooterJobList.map((item, index) => (
          <React.Fragment key={`footer-job-${index}`}>
            <Link href={`/jobs/${item.url}`}>
              <div className={styles.listItem}>{`${item.name} Jobs`}</div>
            </Link>
          </React.Fragment>
        ))}
      </div>
      <div className={styles.listContainer}>
        <div className={styles.listTitle}>Search Jobs</div>
        {FooterCityList.map((item, index) => (
          <React.Fragment key={`footer-city-${index}`}>
            <Link href={`/cities/${item.url}`}>
              <div className={styles.listItem}>{`${item.name} Jobs`}</div>
            </Link>
          </React.Fragment>
        ))}
      </div>
    </footer>
  );
};
