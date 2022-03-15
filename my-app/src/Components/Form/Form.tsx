import React from 'react';
import { FormPropsTypes } from '../../type';
import { Field } from './Field/Field';

import './Form.scss';


export const Form: React.FC<FormPropsTypes> = ({ changeField, weight1, weight2, height1, height2, bedSize }) => {
  return (
    <div>
      <h3 className="Form__title">Renseigne tes infos ici :</h3>
      <form className="Form">
        <div className="Form__row">
          <label>Ton poids</label>
          <Field value={weight1} name={'weight1'} placeholder={'poids en kg'} manageChange={changeField} type={undefined} />
          <label>Ta taille</label>
          <Field value={weight2} name={'height1'} placeholder={'taille en cm'} manageChange={changeField} type={undefined} />
        </div>
        <div className="Form__row">
          <label>Son poids</label>
          <Field value={height1} name={'weight2'} placeholder={'poids en kg'} manageChange={changeField} type={undefined} />
          <label>Sa taille</label>
          <Field value={height2} name={'height2'} placeholder={'taille en cm'} manageChange={changeField} type={undefined} />
        </div>
        <div className="Form__row">
          <label>Largeur du lit</label>
          <Field value={bedSize} name={'bedSizeWeight'} placeholder={'largeur en cm'} manageChange={changeField} type={undefined} />
        </div>
      </form>
    </div>
  );
}

