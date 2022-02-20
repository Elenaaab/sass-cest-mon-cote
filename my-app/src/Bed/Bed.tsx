import React from 'react';
import { BedPropsTypes } from '../type';

import './Bed.scss';

// Ici on va passer pas mal de props depuis form qui vont gérer les conditions du css : 
export const Bed: React.FC<BedPropsTypes> = () => {
  return (
    <div className="Bed__container">
      <div className="Bed__head">
      <div className='Bed__pillow'>Oreiller 1</div>
      <div className='Bed__pillow'>Oreiller 2</div>
      </div>
      <div className='Bed__sheet'>Bed Sheet
      <div className="Bed__sheet--fold">Bed Sheet Fold</div>
      </div>
    </div>
  );
}
