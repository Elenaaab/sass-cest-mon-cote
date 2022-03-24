import React from 'react';
import { PropsTypes } from '../../../type';

import './Bed.scss';

  // Fonction qui calcule le ratio du lit pour ensuite dynamiser en conditionnelle le nom de la classe

  // on parseInt

  // L'algo de ce calcul étant : 

  // weight1 + height1 = result1
  // ex : 65 + 178 = 243
  // weight1 + height1 = result2
  // ex : 65 + 170 = 235
  // = % de bedSize = 140 (r1 = , r2 = 

export const Bed: React.FC<PropsTypes> = ({newValue}) => {

 let person1 = Number(newValue.weight1) + Number(newValue.height1);
 let person2 = Number(newValue.weight2) + Number(newValue.height2);
 let bed = Number(newValue.bedSize);

let bedCalc = function(p1:number,p2:number,b:number) {
  console.log('wesh ça passe crème')
 return b - (p1/p2);
}

let result = bedCalc(person1, person2, bed);
console.log(result);

// Il faut retourner différents mots qu'on va intégrer dans le nom de la classe en fonction du résultat donc faire un return avec des conditions
  
  return (
    <div className="Bed__container">
      <div className="Bed__head">
      <div className="Bed__pillow"></div>
      <div className="Bed__pillow"></div>
      </div>
      <div className="Bed__sheet">
      <div className="Bed__sheet--fold"></div>
      {/* className de span qu'il faut dynamiser avec result*/}
      <span className="Bed__result">COUCOU</span>
      </div>
    </div>
  );
}

