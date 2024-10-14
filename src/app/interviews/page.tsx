import { ContentIndex } from '@/components/templates/ContentGrid';
import { ResourceMap } from '@/lib/constants/ContentList';
import { sanityClient } from '@/service/sanity/client';

export default async function Page() {
  const posts = await sanityClient.fetch(ResourceMap.interviews.query);
  const header = ResourceMap.interviews.header;

  return <ContentIndex header={header} content={posts} />;
}
