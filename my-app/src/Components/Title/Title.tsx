import React from 'react';
import { TitlePropsTypes } from '../../type';

import './Title.scss';


export const Title: React.FC<TitlePropsTypes> = () => {
  return (
    <div className="Title">
      <h1>T'es sur mon côté !</h1>
      <h2>Besoin d'une preuve ?</h2>
    </div>
  );
}
