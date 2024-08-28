import React, { ChangeEvent, forwardRef, useRef, useState } from 'react';
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';
import { ErrorText } from '../atoms/ErrorText';
import styles from './FileUpload.module.css';

interface FileUploadProps {
  name: string;
  label?: string;
  error?:
    | string
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const FileUpload = forwardRef<HTMLInputElement, FileUploadProps>(
  ({ name, label, error, onChange, ...props }, forwardRef) => {
    const [imageUrl, setImageUrl] = useState<string | null>(null);

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
        const url = URL.createObjectURL(file);
        // console.log('url:', url);
        setImageUrl(url);
        if (onChange) {
          onChange(event);
        }
      }
    };

    return (
      <div className={styles.container}>
        {label && <label className={styles.labelText}>{label}</label>}
        <input
          type="file"
          name={name}
          ref={forwardRef}
          onChange={handleFileChange}
          {...props}
        />
        {imageUrl && (
          <img
            className={styles.image}
            src={imageUrl}
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        )}
        {error && <ErrorText>{error?.toString()}</ErrorText>}
      </div>
    );
  }
);

export default FileUpload;
