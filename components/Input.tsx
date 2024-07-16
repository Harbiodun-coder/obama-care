import React, { ChangeEvent } from "react";

interface InputProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  change: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  placeholder?: string;
  required?: boolean;
  readOnly?: boolean;
  icon?: React.ReactNode;
  options?: string[];
}

const Input: React.FC<InputProps> = ({
  label,
  name,
  type = "text",
  value,
  change,
  placeholder,
  required = false,
  readOnly = false,
  icon,
  options,
}) => {
  return (
    <div className="flex flex-col mb-4">
      <label htmlFor={name} className="mb-1 text-sm text-gray-600">
        {label}
      </label>
      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {icon}
          </div>
        )}
        {options ? (
          <select
            id={name}
            name={name}
            value={value}
            onChange={change}
            required={required}
            readOnly={readOnly}
            className={`appearance-none bg-transparent border-none w-full text-gray-700 py-2 px-4 leading-tight focus:outline-none ${
              icon ? "pl-10" : ""
            }`}
          >
            <option value="" disabled>
              {placeholder}
            </option>
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        ) : (
          <input
            id={name}
            name={name}
            type={type}
            value={value}
            onChange={change}
            placeholder={placeholder}
            required={required}
            readOnly={readOnly}
            className={`w-full px-4 py-3 text-gray-700 bg-white border rounded-md focus:outline-none focus:ring ${
              icon ? "pl-10" : ""
            }`}
          />
        )}
      </div>
    </div>
  );
};

export default Input;
