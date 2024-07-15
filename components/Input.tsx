import React from 'react';

type InputProps = {
  label: string;
  name: string;
  type?: string;
  value: string;
  change: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  readOnly?: boolean;
  required?: boolean;
  icon?: React.ReactNode;
};

const Input: React.FC<InputProps> = ({
  label,
  name,
  type = 'text',
  value,
  change,
  placeholder,
  readOnly = false,
  required = false,
  icon,
}) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={name}>
        {label}
      </label>
      <div className="relative">
        {icon && <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          {icon}
        </div>}
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={change}
          placeholder={placeholder}
          readOnly={readOnly}
          required={required}
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${icon ? 'pl-10' : ''}`}
        />
      </div>
    </div>
  );
};

export default Input;
