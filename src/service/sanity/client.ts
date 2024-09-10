import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId } from './env';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion, // https://www.sanity.io/docs/api-versioning
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
});

const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source: SanityImageSource) => builder.image(source);
