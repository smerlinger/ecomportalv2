import { IconButton } from '@radix-ui/themes';
import Link from 'next/link';
import styles from './socialMediaButton.module.css';

export const SocialMediaButton = ({
  link,
  icon,
}: {
  link: string;
  icon: JSX.Element;
}) => {
  return (
    <Link href={link} target="_blank">
      <IconButton className={styles.iconButton}>{icon}</IconButton>
    </Link>
  );
};
