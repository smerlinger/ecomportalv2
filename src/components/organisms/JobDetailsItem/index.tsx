import styles from './jobDetailsItem.module.css';

interface JobDetailsItemProps {
  title: string;
  text: string;
}

export const JobDetailsItem = ({ title, text }: JobDetailsItemProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.text}>{text}</div>
    </div>
  );
};
