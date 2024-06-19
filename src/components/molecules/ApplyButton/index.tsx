import { ArrowFatLinesRight } from '@phosphor-icons/react/dist/ssr';
import { IconButton } from '@radix-ui/themes';
import Link from 'next/link';
import styles from './applyButton.module.css';

interface ApplyButtonProps {
  applicationUrl: string;
  show?: boolean;
}

export const ApplyButton = ({
  applicationUrl,
  show = false,
}: ApplyButtonProps) => {
  return (
    <Link
      href={applicationUrl}
      target="_blank"
      className={styles.link}
      style={show ? { display: 'flex' } : undefined}
    >
      <IconButton className={styles.button}>
        {'Apply Now'}
        <ArrowFatLinesRight weight="fill" size="1.5rem" />
      </IconButton>
    </Link>
  );
};
