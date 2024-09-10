import {
  BLOGS_QUERY,
  COURSES_QUERY,
  ECOM_PLATFORMS_QUERY,
  TOOLS_QUERY,
  ENTRY_LEVEL_QUERY,
  LOYALTY_PROGRAMS_QUERY,
  PRINT_ON_DEMAND_QUERY,
  BUILDING_BRAND_QUERY,
  TOP_CANADIAN_BRANDS_QUERY,
  GETTING_HIRED_QUERY,
  INTERVIEWS_QUERY,
} from '../service/sanity/queries';

export const ResourceMap = {
  interviews: {
    title: 'Interviews',
    slug: 'interviews',
    header: 'Interview Process For The Top eCommerce brands',
    query: INTERVIEWS_QUERY,
  },
  blog: {
    title: 'Blogs',
    slug: 'blog',
    header: 'Case Studies & Growth Hacks From Top eCommerce Brands',
    query: BLOGS_QUERY,
  },
  courses: {
    title: 'Courses',
    slug: 'courses',
    header:
      'Learn The Top eCommerce Skills Through Courses To Supercharge Your Career',
    query: COURSES_QUERY,
  },
  tools: {
    title: 'Tools',
    slug: 'tools',
    header: 'Reccommendations For The Top Shopify Tools & Apps For Your Store',
    query: TOOLS_QUERY,
  },
  entryLevel: {
    title: 'Entry Level',
    slug: 'entry-level',
    header:
      'Learnings & Career Advice for Entry Level (Junior) Positions in eCommerce',
    query: ENTRY_LEVEL_QUERY,
  },
  loyaltyPrograms: {
    title: 'Loyalty Programs',
    slug: 'loyalty-programs',
    header:
      'Tools, Tips, and Case Studies of Loyalty Programs from eCommerce Brands',
    query: LOYALTY_PROGRAMS_QUERY,
  },
  printOnDemand: {
    title: 'Print On Demand',
    slug: 'print-on-demand',
    header: 'Everything to do with Print On Demand',
    query: PRINT_ON_DEMAND_QUERY,
  },
  ecommercePlatforms: {
    title: 'eCommerce Platforms',
    slug: 'ecommerce-platforms',
    header: 'Dive deep into the top eCommerce platforms used today',
    query: ECOM_PLATFORMS_QUERY,
  },
  buildingABrand: {
    title: 'Building a Brand',
    slug: 'building-a-brand',
    header: 'Learn the Fundamentals To Building A Succesful eCommerce Brand',
    query: BUILDING_BRAND_QUERY,
  },
  topCanadianBrands: {
    title: 'Top Canadian Brands',
    slug: 'top-canadian-brands',
    header: 'Top Canadian eCommerce Brands',
    query: TOP_CANADIAN_BRANDS_QUERY,
  },
  gettingHired: {
    title: 'Getting Hired',
    slug: 'getting-hired',
    header: 'A Guide To Getting Hired For Common Roles in eCommerce Brands',
    query: GETTING_HIRED_QUERY,
  },
};
