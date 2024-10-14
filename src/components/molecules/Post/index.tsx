'use client';
import { urlFor } from '@/service/sanity/client';
import styles from './Post.module.css';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import Link from 'next/link';
import { useEffect } from 'react';
import { ResourceMap } from '../../../lib/constants/ContentList';
export interface PostProps {
  _id: string;
  mainImage: SanityImageSource;
  title: string;
  description: string;
  author: { name: string; image: SanityImageSource };
  categories: { title: string }[];
  slug: { current: string };
}
export const Post = ({
  mainImage,
  title,
  description,
  author,
  categories,
  slug,
}: PostProps) => {
  // useEffect(() => {
  //   console.log('categories:', title, categories[0].title);
  // }, [title, description, body, author, categories, slug]);
  const resourceType =
    Object.values(ResourceMap).find(
      (item) => item.title === categories[0].title
    )?.slug || '';
  return (
    <Link href={`/${resourceType}/post/${slug.current}`}>
      <div className={styles.container}>
        <img
          loading="lazy"
          className={styles.image}
          src={urlFor(mainImage).url()}
          alt="image"
        />

        <div className={styles.body}>
          <div className={styles.title}>{title}</div>
          <div className={styles.description}>{description}</div>
          <img
            className={styles.authorImage}
            src={urlFor(author.image).url()}
          />
          by {author.name}
        </div>
        <div className={styles.footer}>
          <div className={styles.footerText}>{categories[0].title}</div>
        </div>
      </div>
    </Link>
  );
};
