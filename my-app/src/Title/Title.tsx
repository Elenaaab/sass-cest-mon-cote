import React from 'react';
import { TitlePropsTypes } from '../type';

import './Title.scss';


export const Title: React.FC<TitlePropsTypes> = () => {
  return (
    <div className="Title">
      <h1>COUCOU Title</h1>
      <h2>Tu vas enfin savoir la place qui t'appartient dans le lit</h2>
    </div>
  );
}
