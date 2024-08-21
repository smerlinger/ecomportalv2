import React, { InputHTMLAttributes, forwardRef, useMemo } from 'react';
import styles from './editableTextInput.module.css';

interface EditableTextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string | undefined;
  value?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const EditableTextInput = forwardRef<HTMLInputElement, EditableTextInputProps>(
  ({ label, error, value, onChange, placeholder, disabled, ...props }, ref) => {
    return (
      <div>
        {label && <label>{label}</label>}
        <input
          ref={ref}
          className={styles.input}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          {...props}
        />
        {error && <span>{error}</span>}
      </div>
    );
  }
);

export default EditableTextInput;
