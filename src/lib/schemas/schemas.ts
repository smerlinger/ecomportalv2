import { z } from 'zod';
const MAX_FILE_SIZE = 100_000_000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

const companyInfoSchema = z.object({
  email: z.string().email({ message: 'Invalid email' }),
  name: z.string().min(1, { message: 'Company name is required' }),
  url: z.string(),
  logo: (z.custom<File>()).optional()//.refine((file) => !file || file.size <= MAX_FILE_SIZE, `Max image size is 100KB.`)
    .refine(
      (file) => !file || ACCEPTED_IMAGE_TYPES.includes(file?.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported."
    ),
})

const LocationSchema = z.object({
  city: z.string().optional(),
  state: z.string().optional(),
  country: z.string().min(1, { message: 'Country is required' }),
})

const SalaryRangeSchema = z.object({ min: z.number().optional(), max: z.number().optional() })

const jobInfoSchema = z.object({
  title: z.string().min(1, { message: 'Job title is required' }),
  category: z.string().min(1, { message: 'Job category is required' }),
  location: LocationSchema,
  employeeCount: z
    .number()
    .min(1, { message: 'Number of positions must be at least 1' }),
  jobType: z.string(),
  applicationUrl: z.string().optional(),
  salary: SalaryRangeSchema,
  description: z.string().min(1, { message: 'Job description is required' }),
  requirements: z.string().optional(),
})

// const addOnsSchema = z.object({
//   highlight: z.boolean().optional(),
//   top24: z.boolean().optional(),
//   week: z.boolean().optional(),
//   month: z.boolean().optional(),
//   emailBlast1: z.boolean().optional(),
//   emailBlast2: z.boolean().optional(),
// })
const AddOnOptions = z.enum([
  'highlight',
  'top24',
  'week',
  'month',
  'emailBlast1',
  'emailBlast2',
]);
const addOnsSchema = z.array(AddOnOptions);

export const postAJobFormSchema = z.object({
  companyInfo: companyInfoSchema,
  jobInfo: jobInfoSchema,
  addOns: addOnsSchema,
});
