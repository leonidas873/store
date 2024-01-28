import React from 'react';
import { twMerge } from 'tailwind-merge';

interface InputProps {
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (name: string, value: string) => void;
  className?: string;
  name: string;
  required?: boolean;
  label?: string;
  parentClassName?: string;
}

function Input(props: InputProps) {
  const {
    type = 'text',
    placeholder = '',
    value,
    onChange,
    className = '',
    name,
    required = false,
    label = '',
    parentClassName = '',
  } = props;

  const inputClass = twMerge(
    'border px-4 py-2 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full',
    className,
  );
  const parentClass = twMerge('flex flex-col w-full', parentClassName);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value: inputValue } = event.target;
    onChange(name, inputValue);
  };

  return (
    <div className={parentClass}>
      <label htmlFor={name} className="mb-2 text-lg font-medium text-white">
        {label}
      </label>
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChangeHandler}
        className={inputClass}
        name={name}
        required={required}
      />
    </div>
  );
}

export default Input;
