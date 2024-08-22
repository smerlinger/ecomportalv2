import { z } from 'zod';
const MAX_FILE_SIZE = 100_000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

export const PostAJobFormSchema = z.object({
  companyInfo: z.object({
    email: z.string().email({ message: 'Invalid email' }),
    name: z.string().min(1, { message: 'Company name is required' }),
    url: z.string(),
    logo: z.any().optional()//.refine((file) => file?.size <= MAX_FILE_SIZE, `Max image size is 100KB.`)
    // .refine(
    //   (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
    //   "Only .jpg, .jpeg, .png and .webp formats are supported."
    // ),
  }),
  jobInfo: z.object({
    title: z.string().min(1, { message: 'Job title is required' }),
    category: z.string().min(1, { message: 'Job category is required' }),
    location: z.object({
      city: z.string().optional(),
      state: z.string().optional(),
      country: z.string().min(1, { message: 'Country is required' }),
    }),
    employeeCount: z
      .number()
      .min(1, { message: 'Number of positions must be at least 1' }),
    jobType: z.string(),
    applicationUrl: z.string().optional(),
    salary: z.object({ min: z.number().optional(), max: z.number().optional() }),
    description: z.string().min(1, { message: 'Job description is required' }),
    requirements: z.string().optional(),
  }),
});
