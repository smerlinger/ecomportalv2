import { defineQuery } from 'next-sanity';

const createPostQuery = (category: string) =>
  defineQuery(`*[_type == "post" && "${category}" in categories[]->title] {
  _id,  
  title,
  author -> {
    name,
    image
  },
  description,
  mainImage,
  slug
}`);

export const BLOGS_QUERY = createPostQuery('Blogs');
export const COURSES_QUERY = createPostQuery('Courses');
export const ECOM_PLATFORMS_QUERY = createPostQuery('eCommerce Platforms');
export const TOOLS_QUERY = createPostQuery('Tools');
export const ENTRY_LEVEL_QUERY = createPostQuery('Entry Level');
export const LOYALTY_PROGRAMS_QUERY = createPostQuery('Loyalty Programs');
export const PRINT_ON_DEMAND_QUERY = createPostQuery('Print On Demand');
export const BUILDING_BRAND_QUERY = createPostQuery('Building a Brand');
export const TOP_CANADIAN_BRANDS_QUERY = createPostQuery('Top Canadian Brands');
export const GETTING_HIRED_QUERY = createPostQuery('Getting Hired');
