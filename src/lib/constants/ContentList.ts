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
} from '../service/sanity/queries';

export const ContentList = {
  blog: {
    title: 'Blog',
    header: 'Case Studies & Growth Hacks From Top eCommerce Brands',
    query: BLOGS_QUERY,
  },
  courses: {
    title: 'Courses',
    header:
      'Learn The Top eCommerce Skills Through Courses To Supercharge Your Career',
    query: COURSES_QUERY,
  },
  tools: {
    title: 'Tools',
    header: 'Reccommendations For The Top Shopify Tools & Apps For Your Store',
    query: TOOLS_QUERY,
  },
  entryLevel: {
    title: 'Entry Level',
    header:
      'Learnings & Career Advice for Entry Level (Junior) Positions in eCommerce',
    query: ENTRY_LEVEL_QUERY,
  },
  loyaltyPrograms: {
    title: 'Loyalty Programs',
    header:
      'Tools, Tips, and Case Studies of Loyalty Programs from eCommerce Brands',
    query: LOYALTY_PROGRAMS_QUERY,
  },
  printOnDemand: {
    title: 'Print On Demand',
    header: 'Everything to do with Print On Demand',
    query: PRINT_ON_DEMAND_QUERY,
  },
  ecommercePlatforms: {
    title: 'eCommerce Platforms',
    header: 'Dive deep into the top eCommerce platforms used today',
    query: ECOM_PLATFORMS_QUERY,
  },
  buildingABrand: {
    title: 'Building a Brand',
    header: 'Learn the Fundamentals To Building A Succesful eCommerce Brand',
    query: BUILDING_BRAND_QUERY,
  },
  topCanadianBrands: {
    title: 'Top Canadian Brands',
    header: 'Top Canadian eCommerce Brands',
    query: TOP_CANADIAN_BRANDS_QUERY,
  },
  gettingHired: {
    title: 'Getting Hired',
    header: 'A Guide To Getting Hired For Common Roles in eCommerce Brands',
    query: GETTING_HIRED_QUERY,
  },
};
