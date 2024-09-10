import { ContentIndex } from '@/components/templates/ContentGrid';
import { ResourceMap } from '@/constants/ContentList';
import { sanityClient } from '@/service/sanity/client';

export default async function Page() {
  const posts = await sanityClient.fetch(ResourceMap.topCanadianBrands.query);
  const header = ResourceMap.topCanadianBrands.header;

  return <ContentIndex header={header} content={posts} />;
}
