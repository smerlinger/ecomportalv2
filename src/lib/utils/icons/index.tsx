import { AddressBook, BookOpen, Globe, SignIn } from '@phosphor-icons/react';

export const returnIcon = (name: string) => {
  switch (name) {
    case 'Login':
      return <SignIn size="1.5rem" weight="regular" />;
    case 'Interviews':
      return <BookOpen size="1.5rem" weight="fill" />;
    case 'Salaries':
      return <Globe size="1.5rem" weight="regular" />;
    case 'Contact Us':
      return <AddressBook size="1.5rem" weight="fill" />;
  }
};
