'use client';

import { MobileMenuItems } from '@/constants/MobileMenuItems';
import { returnIcon } from '@/utils/icons';
import { List, X } from '@phosphor-icons/react';
import * as Dialog from '@radix-ui/react-dialog';
import { IconButton } from '@radix-ui/themes';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import logo from '../../../../public/logo/logoFull.png';
import styles from './mobileMenuButton.module.css';

export const MobileMenuButton = () => {
  const router = useRouter();
  const [active, setActive] = useState(false);

  return (
    <Dialog.Root modal>
      <Dialog.Trigger asChild>
        <IconButton
          onClick={() => setActive(!active)}
          className={styles.menuButton}
        >
          {active ? (
            <X width="1.5rem" height="1.5rem" />
          ) : (
            <List width="1.5rem" height="1.5rem" />
          )}
        </IconButton>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay
          className={styles.overlay}
          onClick={() => setActive(!active)}
        />
        <Dialog.Content className={styles.content}>
          <Dialog.Title className={styles.title}>
            <Image alt="dialog logo" src={logo} className={styles.image} />
            <Dialog.Close asChild onClick={() => setActive(!active)}>
              <X width="1.5rem" height="1.5rem" />
            </Dialog.Close>
          </Dialog.Title>
          {MobileMenuItems.map((item, index) => (
            <React.Fragment key={`menu-items-${index}`}>
              <IconButton
                className={styles.iconButton}
                onClick={() => router.push(`/${item.url}`)}
              >
                <div className={styles.iconBackground}>
                  {returnIcon(item.name)}
                </div>
                {item.name}
              </IconButton>
            </React.Fragment>
          ))}
          <div className={styles.divider} />
          <IconButton
            className={styles.jobButton}
            onClick={() => router.push('/post-a-job')}
          >
            Post A Job
          </IconButton>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
