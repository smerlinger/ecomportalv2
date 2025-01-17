import { ContentIndex } from '@/components/templates/ContentGrid';
import { ResourceMap } from '@/constants/ContentList';
import { sanityClient } from '@/service/sanity/client';

export default async function Page() {
  const posts = await sanityClient.fetch(ResourceMap.loyaltyPrograms.query);
  const header = ResourceMap.loyaltyPrograms.header;

  return <ContentIndex header={header} content={posts} />;
}
