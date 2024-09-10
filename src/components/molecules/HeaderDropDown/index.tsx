'use client';

import { HeaderDropdownItems } from '@/lib/constants/HeaderDropdownItems';
import { CaretDown } from '@phosphor-icons/react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { IconButton } from '@radix-ui/themes';
import { useRouter } from 'next/navigation';
import React from 'react';
import styles from './headerDropDown.module.css';

export const HeaderDropDown = () => {
  const router = useRouter();

  return (
    <DropdownMenu.Root modal>
      <DropdownMenu.Trigger className={styles.trigger} asChild>
        <IconButton className={styles.button}>
          More
          <CaretDown weight="bold" />
        </IconButton>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className={styles.content} sideOffset={5}>
          {HeaderDropdownItems.map((item, index) => (
            <React.Fragment key={`header-dropdown-menu-item-${index}`}>
              <DropdownMenu.Item
                className={styles.item}
                disabled={item.disabled}
                onClick={() => router.push(item.link)}
              >
                {item.title}
              </DropdownMenu.Item>
            </React.Fragment>
          ))}
          <DropdownMenu.Arrow className={styles.arrow} />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
