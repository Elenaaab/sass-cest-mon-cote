import React from 'react';
import { FormPropsTypes } from '../type';
import { Field } from './Field/Field';
import './Form.scss';


export const Form: React.FC<FormPropsTypes> = () => {
  return (
    <div>
      <h1>COUCOU Form</h1>
      <form>
        <h4>Ton poids</h4>
        <Field value={''} type={undefined} name={'weight1'} placeholder={undefined} manageChange={function (): void {
          throw new Error('Function not implemented.');
        } } />
        <h4>Ta taille</h4>
        <Field value={''} type={undefined} name={'height1'} placeholder={undefined} manageChange={function (): void {
          throw new Error('Function not implemented.');
        } } />
        <h4>Son poids</h4>
        <Field value={''} type={undefined} name={'weight2'} placeholder={undefined} manageChange={function (): void {
          throw new Error('Function not implemented.');
        } } />
        <h4>Sa taille</h4>
        <Field value={''} type={undefined} name={'height2'} placeholder={undefined} manageChange={function (): void {
          throw new Error('Function not implemented.');
        } } />
        <h4>Les dimensions du lit</h4>
        <Field value={''} type={undefined} name={'bedSizeWeight'} placeholder={undefined} manageChange={function (): void {
          throw new Error('Function not implemented.');
        } } />
        <span>X</span>
        <Field value={''} type={undefined} name={'bedSizeHeight'} placeholder={undefined} manageChange={function (): void {
          throw new Error('Function not implemented.');
        } } />
      </form>
    </div>
  );
}

