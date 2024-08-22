import React, { InputHTMLAttributes, forwardRef, useMemo } from 'react';
import styles from './editableInput.module.css';
import { ErrorText } from '@/components/atoms/ErrorText';

interface EditableInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string | undefined;
  value?: string | number;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const EditableInput = forwardRef<HTMLInputElement, EditableInputProps>(
  ({ label, error, value, onChange, placeholder, disabled, ...props }, ref) => {
    return (
      <div className={styles.container}>
        {label && <label className={styles.labelText}>{label}</label>}
        <input
          ref={ref}
          className={styles.input}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          {...props}
        />
        {error && <ErrorText>{error}</ErrorText>}
      </div>
    );
  }
);
