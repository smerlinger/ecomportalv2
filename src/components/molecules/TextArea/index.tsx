import { ErrorText } from '@/components/atoms/ErrorText';
import React, { ChangeEvent, forwardRef } from 'react';
import styles from './TextArea.module.css'
interface TextAreaProps {
  label: string;
  value: string;
  error?: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, value, error, onChange, ...props }, ref) => {
    return (
      <div className={styles.container}>
        <label className={styles.labelText}>{label}</label>
        <textarea className={styles.textArea} ref={ref} value={value} onChange={onChange} {...props} />
        {error && <ErrorText>{error}</ErrorText>}
      </div>
    );
  }
);

export default TextArea;
