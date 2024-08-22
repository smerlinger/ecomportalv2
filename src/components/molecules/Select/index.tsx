import { Student } from '@phosphor-icons/react';
import { forwardRef, SelectHTMLAttributes } from 'react';
import styles from './Select.module.css';
import { ErrorText } from '@/components/atoms/ErrorText';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string | undefined;
  options: { value: string; label: string; disabled?: boolean }[];
  value?: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, value, onChange, options, ...props }, ref) => {
    return (
      <div className={styles.container}>
        {label && <label className={styles.labelText}>{label}</label>}
        <select className={styles.select} ref={ref} value={value} onChange={onChange} {...props}>
          {options.map((option) => (
            <option key={option.value} value={option.value} disabled={option.disabled}>
              {option.label}
            </option>
          ))}
        </select>
        {/* <S.Root onValueChange={onChange}>
          <S.Trigger>
            {options.find((option) => option.value === value)?.label}
          </S.Trigger>
          <S.Content>
            {options.map((option) => (
              <SelectItem value={option.value}>{option.label}</SelectItem>
            ))}
          </S.Content>
        </S.Root> */}
        {error && <ErrorText>{error}</ErrorText>}
      </div>
    );
  }
);

// interface SelectItemProps {
//   children: string;
//   value: string;
// }
// const SelectItem = forwardRef<HTMLDivElement, SelectItemProps>(
//   ({ children, value, ...props }, ref) => {
//     return (
//       <S.Item
//         // className={classnames('SItem', className)}
//         {...props}
//         value={value}
//         ref={ref}
//       >
//         <S.ItemText>{children}</S.ItemText>
//         <S.ItemIndicator className="SelectItemIndicator">
//           <CheckIcon />
//         </S.ItemIndicator>
//       </S.Item>
//     );
//   }
// );
