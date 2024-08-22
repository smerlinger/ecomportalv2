import styles from './ErrorText.module.css';
import React from 'react';

interface ErrorTextProps {
    children: React.ReactNode;
}

export const ErrorText = (props: ErrorTextProps) => {
    return (
        <span className={styles.text}>{props.children}</span>
    );
};