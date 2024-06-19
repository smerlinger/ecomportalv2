'use client';

import styles from './jobItem.module.css';
import { DotOutline, MapPin, Money, Users } from '@phosphor-icons/react';
import Link from 'next/link';
import { AlgoliaHit } from 'types';
import { JobItemTag } from '@/components/molecules/JobItemTag';
import { JobItemLogo } from '@/components/molecules/JobItemLogo';
import {
  getDateDifference,
  getEmployeeRange,
  getLocation,
  getSalaryDisplay,
} from '@/utils/job';

interface JobItemProps {
  hit: AlgoliaHit;
}

export const JobItem = ({ hit }: JobItemProps) => {
  return (
    <Link href={`/job-details/${hit.jobUrl}`} target="_blank">
      <div className={styles.wrapper}>
        <div className={styles.primaryContainer}>
          {hit.logo && (
            <JobItemLogo logo={hit.logo} companyName={hit.company_name} />
          )}
          <div className={styles.primaryDetails}>
            <h1>{hit.job_position}</h1>
            <h2>{hit.company_name}</h2>
          </div>
        </div>
        <div className={styles.secondaryContainer}>
          <div className={styles.secondaryDetails}>
            {hit.empcount && getEmployeeRange(hit.empcount) !== '' && (
              <div className={styles.detail}>
                <Users />
                {getEmployeeRange(hit.empcount)}
              </div>
            )}
            {Number(hit.salaryMin) !== null &&
            Number(hit.salaryMin) !== 0 &&
            Number(hit.salaryMax) !== null &&
            Number(hit.salaryMax) !== 0 ? (
              <div className={styles.detail}>
                <Money />
                {getSalaryDisplay({
                  salaryMax: hit.salaryMax == null ? 0 : Number(hit.salaryMax),
                  salaryMin: hit.salaryMin == null ? 0 : Number(hit.salaryMin),
                })}
              </div>
            ) : null}
            {(hit.city || hit.location) && (
              <div className={styles.detail}>
                <MapPin />
                {getLocation({ city: hit.city, location: hit.location })}
              </div>
            )}
            {hit.postedat && (
              <div className={styles.detail}>
                <DotOutline weight="fill" />
                {getDateDifference(hit.postedat)}
                {/* {hit.top24 || hit.week || hit.month ? (
                <div className="tracking-common font-montserrant ml-1 rounded-lg text-lg font-medium text-black">
                  📌
                </div>
              ) : null} */}
              </div>
            )}
          </div>
          <div className={styles.tags}>
            {hit.job_category && hit.job_category.toLowerCase() !== 'none' && (
              <JobItemTag text={hit.job_category} backgroundColor="#709771" />
            )}
            {(hit.job_type || hit.city.toLowerCase() == 'remote') && (
              <JobItemTag
                text={
                  hit.city.toLowerCase() == 'remote' ? 'Remote' : hit.job_type
                }
                backgroundColor="#2d4f42"
              />
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};
