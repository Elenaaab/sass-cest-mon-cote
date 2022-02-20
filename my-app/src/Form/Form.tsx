import React from 'react';
import { FormPropsTypes } from '../type';
import { Field } from './Field/Field';

import './Form.scss';


export const Form: React.FC<FormPropsTypes> = () => {
  return (
    <div>
      <h3>Renseigne tes infos ici :</h3>
      <form className="Form">
        <div className="Form__row">
          <label>Ton poids</label>
          <Field value={''} type={undefined} name={'weight1'} placeholder={'poids en kg'} manageChange={function (): void {
            throw new Error('Function not implemented.');
          } } />
          <label>Ta taille</label>
          <Field value={''} type={undefined} name={'height1'} placeholder={'taille en cm'} manageChange={function (): void {
            throw new Error('Function not implemented.');
          } } />
        </div>
        <div className="Form__row">
          <label>Son poids</label>
          <Field value={''} type={undefined} name={'weight2'} placeholder={'poids en kg'} manageChange={function (): void {
            throw new Error('Function not implemented.');
          } } />
          <label>Sa taille</label>
          <Field value={''} type={undefined} name={'height2'} placeholder={'taille en cm'} manageChange={function (): void {
            throw new Error('Function not implemented.');
          } } />
        </div>
        <div className="Form__row">
          <label>Les dimensions du lit</label>
          <Field value={''} type={undefined} name={'bedSizeWeight'} placeholder={'largeur en cm'} manageChange={function (): void {
            throw new Error('Function not implemented.');
          } } />
          <span>X</span>
          <Field value={''} type={undefined} name={'bedSizeHeight'} placeholder={'longueur en cm'} manageChange={function (): void {
            throw new Error('Function not implemented.');
          } } />
        </div>
      </form>
    </div>
  );
}

