'use client';
import { useParams } from 'next/navigation';
import { Banner } from '@/components/atoms/Banner';
import { Footer } from '@/components/organisms/Footer';
import { Header } from '@/components/organisms/Header';
import { SearchResults } from '@/components/templates/SearchResults';
import { FilteredIntro } from '@/components/organisms/FilteredIntro';
import styles from './page.module.css';

export default function Page() {
  const { category, id } = useParams();
  const isLocation = category === 'cities';
  const query = id
    .toString()
    .replace(/-/g, ' ')
    .replace(/(^\w|\s\w)/g, (m) => m.toUpperCase());
  return (
    <div className={styles.wrapper}>
      <Banner />
      <div className={styles.container}>
        <Header />
        <FilteredIntro query={query as string} isLocation={isLocation} />
        <SearchResults useFilter={true} initialQuery={query} />
      </div>
      <Footer />
    </div>
  );
}
