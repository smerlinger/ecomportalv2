import { ContentIndex } from '@/components/templates/ContentGrid';
import { ResourceMap } from '@/lib/constants/ContentList';
import { sanityClient } from '@/service/sanity/client';

export default async function Page() {
  const posts = await sanityClient.fetch(ResourceMap.buildingABrand.query);
  const header = ResourceMap.buildingABrand.header;

  return <ContentIndex header={header} content={posts} />;
}
