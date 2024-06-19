'use client';

import * as Form from '@radix-ui/react-form';
import styles from './homeIntroEmailForm.module.css';

export const HomeIntroEmailForm = () => {
  return (
    <Form.Root className={styles.root}>
      <Form.Field name="Get weekly job alerts..." className={styles.field}>
        <Form.Control asChild>
          <input
            type="email"
            className={styles.control}
            placeholder="Get weekly job alerts..."
            required
          />
        </Form.Control>
      </Form.Field>
      <Form.Submit className={styles.submit}>Subscribe</Form.Submit>
    </Form.Root>
  );
};
