import React from 'react';
import { BedPropsTypes } from '../../type';

import './Bed.scss';

// Ici on va passer pas mal de props depuis form qui vont gérer les conditions du css : 
// Les oreillers en conditionnel
// La couette en conditionnelle, soit on fait un linear gradient soit on a la divise en 12 parts...
export const Bed: React.FC<BedPropsTypes> = () => {
  return (
    <div className="Bed__container">
      <div className="Bed__head">
      <div className="Bed__pillow"></div>
      <div className="Bed__pillow"></div>
      </div>
      <div className="Bed__sheet">
      <div className="Bed__sheet--fold"></div>
      <span>COUCOU</span>
      </div>
    </div>
  );
}
