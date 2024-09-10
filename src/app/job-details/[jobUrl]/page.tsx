import { Banner } from '@/components/atoms/Banner';
import styles from './page.module.css';
import { Header } from '@/components/organisms/Header';
import { Footer } from '@/components/organisms/Footer';
import { JobDetail } from '@/lib/types/types';
import { JobDetails } from '@/components/templates/JobDetails';
import { ApplyButton } from '@/components/molecules/ApplyButton';

export default async function Page({
  params: { jobUrl },
}: {
  params: { jobUrl: string };
}) {
  const fetchJobDetails = async () => {
    try {
      const res = await fetch(
        `${process.env.BASE_URL}/api/jobs?jobUrl=${jobUrl}`,
        { cache: 'force-cache' }
      );
      if (!res.ok) {
        throw new Error(`Failed to fetch data with status ${res.status}`);
      }
      const data = await res.json();

      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const fetchedJobDetails = (await fetchJobDetails()) as JobDetail;

  return (
    <div className={styles.wrapper}>
      <Banner />
      <div className={styles.container}>
        <Header />
        <JobDetails jobDetails={fetchedJobDetails} />
      </div>
      <div className={styles.applyButton}>
        <div>
          <span
            className={styles.position}
          >{`${fetchedJobDetails.job_position}`}</span>
          <span
            className={styles.companyName}
          >{` at ${fetchedJobDetails.company_name}`}</span>
        </div>
        <ApplyButton show applicationUrl={fetchedJobDetails.application_url} />
      </div>
      <Footer />
    </div>
  );
}
