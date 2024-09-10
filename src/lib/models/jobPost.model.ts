import mongoose, { Schema, Document } from 'mongoose';

interface IJobPost extends Document {
  sessionId: string;
  title: string;
  description: string;
  location: string;
  paymentStatus: boolean;
  createdAt: Date;
}
const companyInfoSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Invalid email'],
    match: [/.+@.+\..+/, 'Invalid email'],
  },
  name: {
    type: String,
    required: [true, 'Company name is required'],
  },
  url: {
    type: String,
  },
  //   logo: {
  //     type: Buffer, // Assuming the logo is stored as a buffer
  //     validate: {
  //       validator: function (file: any) {
  //         return !file || ACCEPTED_IMAGE_TYPES.includes(file.mimetype);
  //       },
  //       message: 'Only .jpg, .jpeg, .png and .webp formats are supported.',
  //     },
  //   },
});
const locationSchema = new mongoose.Schema({
  city: {
    type: String,
    default: null,
  },
  state: {
    type: String,
    default: null,
  },
  country: {
    type: String,
    required: [true, 'Country is required'],
  },
});

const salaryRangeSchema = new mongoose.Schema({
  min: {
    type: Number,
    default: null,
  },
  max: {
    type: Number,
    default: null,
  },
});

const jobInfoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Job title is required'],
  },
  category: {
    type: String,
    required: [true, 'Job category is required'],
  },
  location: locationSchema,
  employeeCount: {
    type: Number,
    required: [true, 'Number of positions must be at least 1'],
    min: [1, 'Number of positions must be at least 1'],
  },
  jobType: {
    type: String,
  },
  applicationUrl: {
    type: String,
    default: null,
  },
  salary: salaryRangeSchema,
  description: {
    type: String,
    required: [true, 'Job description is required'],
  },
  requirements: {
    type: String,
    default: null,
  },
});

const JobPostSchema: Schema = new Schema({
  sessionId: { type: String, required: true },
  companyInfo: companyInfoSchema,
  jobInfo: jobInfoSchema,
  addOns: [String],
  paymentStatus: { type: String, default: 'unpaid' },
});

const JobPost =
  mongoose.models.JobPost || mongoose.model('JobPost', JobPostSchema);

export default JobPost;
