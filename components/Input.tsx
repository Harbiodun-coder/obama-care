import React from "react";

type InputProps = {
  label: string;
  name: string;
  type?: string;
  value: string;
  change: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  placeholder?: string;
  required?: boolean;
  icon?: React.ReactNode;
  options?: string[];
  readOnly?: boolean;
};

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
  options
}) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={name}>
        {label}
      </label>
      <div className="flex items-center border-b border-gray-300 py-2">
        {icon && <span className="mr-2 text-gray-500">{icon}</span>}
        {options ? (
          <select
            name={name}
            value={value}
            onChange={change}
            required={required}
            readOnly={readOnly}
            className="appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none"
          >
            <option value="" disabled>
              Select {label.toLowerCase()}
            </option>
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        ) : (
          <input
            type={type}
            name={name}
            value={value}
            onChange={change}
            placeholder={placeholder}
            required={required}
            className="appearance-none bg-transparent border-none w-full text-gray-700 py-2 px-3 leading-tight focus:outline-none"
          />
        )}
      </div>
    </div>
  );
};

export default Input;
