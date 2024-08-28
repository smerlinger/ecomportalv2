'use client';
import { Banner } from '@/components/atoms/Banner';
import { Footer } from '@/components/organisms/Footer';
import { Header } from '@/components/organisms/Header';
import { SearchResults } from '@/components/templates/SearchResults';
import { useParams } from 'next/navigation';
import styles from './page.module.css';
import { FilteredIntro } from '@/components/organisms/FilteredIntro';

export default function Page() {
  const { role } = useParams();
  const query = role
    .toString()
    .replace(/-/g, ' ')
    .replace(/(^\w|\s\w)/g, (m) => m.toUpperCase());
  return (
    <div className={styles.wrapper}>
      <Banner />
      <div className={styles.container}>
        <Header />
        <FilteredIntro query={query as string} />
        <SearchResults useFilter={true} initialQuery={query} />
      </div>
      <Footer />
    </div>
  );
}
