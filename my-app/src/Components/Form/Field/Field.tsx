import { SetStateAction, useState } from 'react';
import { FieldPropsTypes } from '../../../type';

import './field.scss';

export const Field:React.FC<FieldPropsTypes> = ({
  value,
  type,
  name,
  placeholder
}) => {

  let [newValue, setNewValue] = useState("");

  const handleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setNewValue(event.target.value);
  };
  const inputId = `field-${name}`;

  return (
    <input
      // React - state
      value={newValue}
      onChange={handleChange}
      // infos de base
      id={inputId}
      type={type}
      className="Field__input"
      placeholder={placeholder}
      name={name}
      required
    />
  );
};

