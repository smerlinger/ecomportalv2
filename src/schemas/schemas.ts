import { z } from 'zod';

export const PostAJobFormSchema = z.object({
  //   companyInfo: z.object({
  //     email: z.string().email({ message: 'Invalid email' }),
  //     name: z.string().min(1, { message: 'Company name is required' }),
  //     url: z.string(),
  //     description: z.string(),
  //   }),
  jobInfo: z.object({
    title: z.string().min(1, { message: 'Job title is required' }),
    // category: z.string().min(1, { message: 'Job category is required' }),
    // location: z.string().min(1, { message: 'Location is required' }),
    // city: z.string(),
    // employeeCount: z.number(),
    // jobType: z.string(),
    // applicationUrl: z.string(),
    // salaryMin: z.number(),
    // salaryMax: z.number(),
    // description: z.string().min(1, { message: 'Job description is required' }),
    // requirements: z.string(),
  }),
});
