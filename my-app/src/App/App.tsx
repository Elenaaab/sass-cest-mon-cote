import React from 'react';

import { Form }from '../Form/Form';
import { Bed } from '../Bed/Bed';
import { Title }from '../Title/Title';

import './App.scss';
import { AppPropsTypes } from '../type';

export const App: React.FC<AppPropsTypes> = () =>{
  return (
  <div>
      <Title/>
      <Form/>
      <Bed/>
    </div>
  );
}
