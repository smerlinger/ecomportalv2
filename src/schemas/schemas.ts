import { z } from 'zod';

export const PostAJobFormSchema = z.object({
  companyInfo: z.object({
    email: z.string().email({ message: 'Invalid email' }),
    name: z.string().min(1, { message: 'Company name is required' }),
    url: z.string(),
  }),
  jobInfo: z.object({
    title: z.string().min(1, { message: 'Job title is required' }),
    category: z.string().min(1, { message: 'Job category is required' }),
    location: z.object({
      city: z.string(),
      state: z.string(),
      country: z.string().min(1, { message: 'Country is required' }),
    }),
    employeeCount: z
      .number()
      .min(1, { message: 'Number of positions must be at least 1' }),
    jobType: z.string(),
    applicationUrl: z.string(),
    salary: z.object({ min: z.number(), max: z.number() }),
    description: z.string().min(1, { message: 'Job description is required' }),
    requirements: z.string(),
  }),
});
