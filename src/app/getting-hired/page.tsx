import { ContentIndex } from '@/components/templates/ContentGrid';
import { ResourceMap } from '@/constants/ContentList';
import { sanityClient } from '@/service/sanity/client';

export default async function Page() {
  const posts = await sanityClient.fetch(ResourceMap.gettingHired.query);
  const header = ResourceMap.gettingHired.header;

  return <ContentIndex header={header} content={posts} />;
}
