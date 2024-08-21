import { forwardRef, SelectHTMLAttributes } from 'react';
import * as S from '@radix-ui/react-select';
import { CheckIcon } from '@radix-ui/react-icons';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string | undefined;
  options: { value: string; label: string }[];
  value?: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, value, onChange, options, ...props }, ref) => {
    return (
      <div>
        {label && <label>{label}</label>}
        <select ref={ref} value={value} onChange={onChange} {...props}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
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
        {error && <span>{error}</span>}
      </div>
    );
  }
);

interface SelectItemProps {
  children: string;
  value: string;
}
const SelectItem = forwardRef<HTMLDivElement, SelectItemProps>(
  ({ children, value, ...props }, ref) => {
    return (
      <S.Item
        // className={classnames('SItem', className)}
        {...props}
        value={value}
        ref={ref}
      >
        <S.ItemText>{children}</S.ItemText>
        <S.ItemIndicator className="SelectItemIndicator">
          <CheckIcon />
        </S.ItemIndicator>
      </S.Item>
    );
  }
);
