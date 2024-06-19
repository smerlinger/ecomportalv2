'use client';

import styles from './jobDetails.module.css';
import { JobDetail } from 'types';
import { JobDetailsHeader } from '@/components/organisms/JobDetailsHeader';
import { JobDetailsItem } from '@/components/organisms/JobDetailsItem';
import { ApplyButton } from '@/components/molecules/ApplyButton';

interface JobDetailsProps {
  jobDetails: JobDetail;
}

export const JobDetails = ({ jobDetails }: JobDetailsProps) => {
  console.log(jobDetails);
  return (
    <div className={styles.container}>
      {/* <JobDetailGoBackButton /> */}
      <JobDetailsHeader jobDetails={jobDetails} />
      <JobDetailsItem
        title={`About ${jobDetails.company_name}`}
        text={jobDetails.job_description}
      />
      <JobDetailsItem title="Requirements" text={jobDetails.job_requirements} />
      <div className={styles.applyButton}>
        <ApplyButton applicationUrl={jobDetails.application_url} />
      </div>
    </div>
  );
};
