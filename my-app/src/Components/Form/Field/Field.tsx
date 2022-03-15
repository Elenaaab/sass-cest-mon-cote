import React from 'react';
import { FieldPropsTypes } from '../../../type';

import './field.scss';

export const Field:React.FC<FieldPropsTypes> = ({
  value,
  type,
  name,
  placeholder,
  manageChange,
}) => {
  const handleChange = (evt:any) => {
    manageChange(evt.target.value, name);
  };

  return (
      <input
        // React - state
        value={value}
        onChange={handleChange}
        // infos de base
        type={type}
        className="Field__input"
        placeholder={placeholder}
        name={name}
        required
      />
  );
};

