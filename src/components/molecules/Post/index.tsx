'use client';
import { urlFor } from '@/service/sanity/client';
import styles from './Post.module.css';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import Link from 'next/link';
import { useEffect } from 'react';
export interface PostProps {
  _id: string;
  mainImage: SanityImageSource;
  title: string;
  description: string;
  body: string;
  author: string;
  authorImage: SanityImageSource;
  categories: string;
  slug: string;
}
export const Post = ({
  mainImage,
  title,
  description,
  body,
  author,
  authorImage,
  categories,
  slug,
}: PostProps) => {
  useEffect(() => {
    console.log(
      'hi:',
      title,
      description,
      body,
      author,
      authorImage,
      categories,
      slug
    );
  }, [title, description, body, author, authorImage, categories, slug]);
  return (
    <div>hello</div>
    // <Link href={`/${categories.toLowerCase()}/${slug}`}>
    // <div className={styles.container}>
    //   <img
    //     loading="lazy"
    //     className={styles.image}
    //     // src={urlFor(image).url()}
    //     src={
    //       'https://www.nylabone.com/-/media/project/oneweb/nylabone/images/dog101/10-intelligent-dog-breeds/golden-retriever-tongue-out.jpg'
    //     }
    //     alt="image"
    //   />

    //   <div className={styles.body}>
    //     <div className={styles.title}>{title}</div>
    //     {body}
    //     <img
    //       className={styles.authorImage}
    //       src={
    //         'https://www.nylabone.com/-/media/project/oneweb/nylabone/images/dog101/10-intelligent-dog-breeds/golden-retriever-tongue-out.jpg'
    //       }
    //     />
    //     {/* src={urlFor(authorImage).url()} /> */}
    //     by {author}
    //   </div>
    //   <div className={styles.footer}>
    //     <div className={styles.footerText}>{categories}</div>
    //   </div>
    // </div>
    // </Link>
  );
};
