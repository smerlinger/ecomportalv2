import { Footer } from '@/components/organisms/Footer';
import styles from './page.module.css';
import { Banner } from '@/components/atoms/Banner';
import { Header } from '@/components/organisms/Header';
import { HomeIntro } from '@/components/organisms/HomeIntro';
import { SearchResults } from '@/components/templates/SearchResults';

export default async function Page() {
  return (
    <div className={styles.wrapper}>
      <Banner />
      <div className={styles.container}>
        <Header />
        <HomeIntro />
        <SearchResults useFilter={true} />
      </div>
      <Footer />
    </div>
  );
}
