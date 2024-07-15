import React from 'react';

interface CheckboxProps {
  name: string;
  value: string;
  id: string;
  label: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
}

const Checkbox: React.FC<CheckboxProps> = ({ name, value, id, label, handleChange }) => {
  return (
    <div className="flex items-center justify-start">
      <input
        name={name}
        value={value}
        type="checkbox"
        id={id}
        className="w-5 h-5 border-gray-600 rounded-lg outline-none"
        onChange={handleChange}
      />
      <label htmlFor={id} className="pl-2">
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
