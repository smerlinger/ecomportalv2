import React, { InputHTMLAttributes, forwardRef } from 'react';
import styles from './editableTextInput.module.css';

interface EditableTextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string | undefined;
  value?: string;
  // onChange: (value: string) => void;
}

const EditableTextInput = forwardRef<HTMLInputElement, EditableTextInputProps>(
  ({ label, error, value, onChange, placeholder, disabled, ...rest }, ref) => {
    return (
      <div>
        {label && <label>{label}</label>}
        <input
          ref={ref}
          className={styles.input}
          value={value}
          // onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          disabled={disabled}
          {...rest} // Spread the rest of the input attributes
        />
        {error && <span>{error}</span>}
      </div>
    );
  }
);

export default EditableTextInput;
