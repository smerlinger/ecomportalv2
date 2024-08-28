import styles from './jobDetailsHeader.module.css';
import { JobDetail } from '@/types/types';
import { MapPin, Money, Users } from '@phosphor-icons/react';
import {
  getDateText,
  getEmployeeRange,
  getLocation,
  getSalaryDisplay,
} from '@/utils/job';

interface JobDetailsHeaderProps {
  jobDetails: JobDetail;
}

export const JobDetailsHeader = ({ jobDetails }: JobDetailsHeaderProps) => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.position}>{jobDetails.job_position}</div>
      <div className={styles.companyName}>{jobDetails.company_name}</div>
      <div className={styles.detailGrid}>
        {jobDetails.empcount &&
          getEmployeeRange(Number(jobDetails.empcount)) !== '' && (
            <div className={styles.detail}>
              <Users />
              {getEmployeeRange(Number(jobDetails.empcount))}
            </div>
          )}
        {Number(jobDetails.salaryMin) !== null &&
          Number(jobDetails.salaryMin) !== 0 &&
          Number(jobDetails.salaryMax) !== null &&
          Number(jobDetails.salaryMax) !== 0 ? (
          <div className={styles.detail}>
            <Money />
            {getSalaryDisplay({
              salaryMax:
                jobDetails.salaryMax == null ? 0 : Number(jobDetails.salaryMax),
              salaryMin:
                jobDetails.salaryMin == null ? 0 : Number(jobDetails.salaryMin),
            })}
          </div>
        ) : null}
        {(jobDetails.city || jobDetails.location) && (
          <div className={styles.detail}>
            <MapPin />
            {getLocation({
              city: jobDetails.city,
              location: jobDetails.location,
            })}
          </div>
        )}
        {jobDetails.postedat && (
          <div className={styles.detail}>
            {`Posted ${getDateText(jobDetails.postedat)}`}
          </div>
        )}
      </div>
    </div>
  );
};
