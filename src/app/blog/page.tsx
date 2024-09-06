import { ContentIndex } from '@/components/templates/ContentGrid';
import { ContentList } from '@/constants/ContentList';
import { sanityClient } from '@/service/sanity/client';

export default async function Page() {
  const posts = await sanityClient.fetch(ContentList.blog.query);
  const header = ContentList.blog.header;
  console.log('posts:', posts);
  // const posts = [
  //   {
  //     _id: '123',
  //     image: '',
  //     title: 'hello world',
  //     body: 'bye world',
  //     author: 'John Doe',
  //     authorImage: '',
  //     category: 'Blog',
  //     slug: 'hello-world',
  //   },
  //   {
  //     _id: '456',
  //     image: '',
  //     title: 'hello world',
  //     body: 'bye world',
  //     author: 'John Doe',
  //     authorImage: '',
  //     category: 'Blog',
  //     slug: 'hello-world-2',
  //   },
  //   {
  //     _id: '789',
  //     image: '',
  //     title: 'hello world',
  //     body: 'bye world',
  //     author: 'John Doe',
  //     authorImage: '',
  //     category: 'Blog',
  //     slug: 'hello-world-3',
  //   },
  // ];
  return <ContentIndex header={header} content={posts} />;
}
