import React from 'react';
import { FieldPropsTypes } from '../../type';

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

  const inputId = `field-${name}`;

  return (
    // modification de la class si le champ est rempli ou non
    <div className={value.length > 0 ? 'field field--has-content' : 'field'}>
      <input
        // React - state
        value={value}
        onChange={handleChange}
        // infos de base
        id={inputId}
        type={type}
        className="field-input"
        placeholder={placeholder}
        name={name}
      />

      <label
        htmlFor={inputId}
        className="field-label"
      >
        {placeholder}
      </label>
    </div>
  );
};

