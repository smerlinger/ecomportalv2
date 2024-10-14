import {
  BrandBubble,
  BrandBubbleProps,
} from '@/components/molecules/BrandBubble';
import { HomeIntroEmailForm } from '@/components/molecules/HomeIntroEmailForm';
import { BrandBubbleList } from '@/lib/constants/BrandBubbleList';
import { Fragment } from 'react';
import styles from './homeIntro.module.css';

export const HomeIntro = () => {
  return (
    <div className={styles.wrapper}>
      {/* {BrandBubbleList.map((item: BrandBubbleProps, index: number) => (
        // <Fragment key={`brand-bubble-${index}`}>
        //   <BrandBubble index={index} image={item.image} style={item.style} />
        // </Fragment>
      ))} */}

      <div className={styles.container}>
        <h1 className={styles.heading}>
          Find Jobs & Hire Talent in
          <br />
          eCommerce
        </h1>
        <HomeIntroEmailForm />
        <div className={styles.subHeading}>
          <p>The #1 Job Board For D2C Brands</p>
        </div>
      </div>
    </div>
  );
};
