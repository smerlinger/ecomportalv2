import { Text } from '@radix-ui/themes';
import { ReactNode } from 'react';

interface TypographyProps {
  variant:
    | 'title-large'
    | 'title-medium'
    | 'title-small'
    | 'body-large'
    | 'body-medium'
    | 'body-small'
    | 'body-large'
    | 'body-medium'
    | 'body-small';
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800;
  color?: string;
  children: ReactNode;
}

export const Typography = ({
  variant,
  weight,
  color,
  children,
}: TypographyProps) => {
  switch (variant) {
    case 'title-large':
      return (
        <Text
          style={{
            fontSize: '2.25rem',
            fontWeight: weight ? weight : '700',
            fontFamily: 'var(--font-montserrat)',
            letterSpacing: '-0.01562em',
            lineHeight: '1',
            color: color ? color : 'var(--color-black)',
          }}
        >
          {children}
        </Text>
      );
    case 'title-medium':
      return (
        <Text
          style={{
            fontSize: '1.625rem',
            fontWeight: weight ? weight : '700',
            fontFamily: 'var(--font-montserrat)',
            letterSpacing: '-0.01562em',
            lineHeight: '1',
          }}
        >
          {children}
        </Text>
      );
    case 'title-small':
      return <Text>{children}</Text>;
    case 'body-large':
      return <Text>{children}</Text>;
    case 'body-medium':
      return <Text>{children}</Text>;
    case 'body-small':
      return (
        <Text
          style={{
            fontSize: '1rem',
            fontWeight: weight ? weight : '500',
            fontFamily: 'var(--font-montserrat)',
            letterSpacing: '-0.01562em',
            lineHeight: '1',
          }}
        >
          {children}
        </Text>
      );
  }
};
