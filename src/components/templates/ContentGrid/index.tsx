import { Layout } from '../Layout/Layout';
import styles from './ContentGrid.module.css';
import { Post, PostProps } from '../../molecules/Post';

interface ContentIndexProps {
  header: string;
  content: PostProps[];
}

export const ContentIndex = ({ header, content }: ContentIndexProps) => {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.header}>{header}</div>
        <div className={styles.grid}>
          {content.map((post) => (
            <Post key={post._id} {...post} />
          ))}
        </div>
      </div>
    </Layout>
  );
};
