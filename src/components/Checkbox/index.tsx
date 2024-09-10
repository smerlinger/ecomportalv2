import React from 'react';
import styles from './Checkbox.module.css';

interface CheckboxGroupProps {
    options: { value: string; label: string; }[];
    value: string[];
    onChange: (value: string[]) => void;
    ref: React.Ref<HTMLInputElement>;
}

const CheckboxGroup = React.forwardRef<HTMLInputElement, CheckboxGroupProps>(({ options, value = [], onChange }, ref) => {
    const handleCheckboxChange = (optionValue: string) => {
        const newSelectedOptions = value.includes(optionValue)
            ? value.filter((v) => v !== optionValue)
            : [...value, optionValue];
        onChange(newSelectedOptions);
    };

    return (
        <div>
            {options.map((option) => (
                <div className={styles.container} key={option.value}>
                    <input
                        type="checkbox"
                        className={styles.CheckboxItem}
                        value={option.value}
                        checked={value.includes(option.value)}
                        onChange={() => handleCheckboxChange(option.value)}
                        ref={ref}
                    />
                    <label className={styles.Label} htmlFor={option.value}>
                        {option.label}
                    </label>
                </div>
            ))}
        </div>
    );
});

export default CheckboxGroup;