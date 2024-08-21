import React, { ChangeEvent, forwardRef } from 'react';
import { RefCallBack } from 'react-hook-form';

interface TextAreaProps {
  label: string;
  value: string;
  error?: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, value, error, onChange, ...props }, ref) => {
    return (
      <div>
        <label>{label}</label>
        <textarea ref={ref} value={value} onChange={onChange} {...props} />
        {error && <span>{error}</span>}
      </div>
    );
  }
);

export default TextArea;
