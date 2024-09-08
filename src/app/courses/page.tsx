import { ContentIndex } from '@/components/templates/ContentGrid';
import { ResourceMap } from '@/constants/ContentList';
import { sanityClient } from '@/service/sanity/client';

export default async function Page() {
  const posts = await sanityClient.fetch(ResourceMap.courses.query);
  const header = ResourceMap.courses.header;
  console.log('posts:', posts);

  return <ContentIndex header={header} content={posts} />;
}
