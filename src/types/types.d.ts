import { z } from 'zod';
import { PostAJobFormSchema } from '@/schemas/schemas';

// Months are zero indexed, so January is month 0.
export type Month = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

// TypeScript version of NonNullable<T> does not work on deeply nested types
export type DeepNonNullable<T> = {
  [P in keyof T]-?: NonNullable<T[P]>;
};

export type AlgoliaHit = {
  jobUrl: string;
  email: string;
  company_name: string;
  company_url: string;
  job_position: string;
  logo: string;
  job_category: string;
  postedat: string;
  job_type: string;
  location: string;
  city: string;
  company_description: string;
  job_description: string;
  job_requirements: string;
  datets: string;
  application_url: string;
  empcount: number;
  salaryMin: number;
  salaryMax: number;
  highlight: string;
  top24: string;
  week: string;
  month: string;
  emailBlast: string;
  top24Timestamp: string;
  weekTimestamp: string;
  monthTimestamp: string;
  objectID: string;
  _highlightResult: string;
  __position: string;
};

export type JobDetail = {
  id: string;
  jobUrl: string;
  email: string | null;
  company_name: string;
  company_url: string;
  job_position: string;
  mission: string | null;
  logo: string;
  job_category: string;
  postedat: string;
  job_type: string;
  location: string;
  city: string;
  company_description: string;
  job_description: string;
  job_requirements: string;
  datets: string;
  application_url: string;
  company_id: string | null;
  empcount: string | null;
  companyUrl: string | null;
  user_id: string | null;
  salaryMin: string; // TODO: should be number
  salaryMax: string; // TODO: should be number
  highlight: null;
  top24: string | null;
  week: string | null;
  month: string | null;
  emailBlast: string | null;
  top24Timestamp: string | null;
  weekTimestamp: string | null;
  monthTimestamp: string | null;
};
export type PostAJobForm = z.infer<typeof PostAJobFormSchema>;
