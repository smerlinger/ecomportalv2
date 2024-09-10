import { ContentIndex } from '@/components/templates/ContentGrid';
import { ResourceMap } from '@/constants/ContentList';
import { sanityClient } from '@/service/sanity/client';

export default async function Page() {
  const posts = await sanityClient.fetch(ResourceMap.tools.query);
  const header = ResourceMap.tools.header;

  return <ContentIndex header={header} content={posts} />;
}
