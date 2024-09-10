import { ContentIndex } from '@/components/templates/ContentGrid';
import { ResourceMap } from '@/constants/ContentList';
import { sanityClient } from '@/service/sanity/client';

export default async function Page() {
  let posts;
  try {
    const response = await sanityClient.fetch(ResourceMap.courses.query);
    posts = JSON.parse(JSON.stringify(response));
  } catch (error) {
    console.error('Error fetching or parsing courses:', error);
    console.log(
      'Raw response:',
      await sanityClient.fetch(ResourceMap.courses.query)
    );
    posts = []; // Fallback to empty array if there's an error
  }
  const header = ResourceMap.courses.header;

  return <ContentIndex header={header} content={posts} />;
}
