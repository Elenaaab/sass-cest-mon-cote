import { PropsTypes } from '../../../type';

import './Bed.scss';

export const Bed: React.FC<PropsTypes> = ({newValue}) => {

 let person1 = Number(newValue.weight1) + Number(newValue.height1);
 let person2 = Number(newValue.weight2) + Number(newValue.height2);
 let bed = Number(newValue.bedSize);

let bedCalc = function(p1:number,p2:number) {
 return (p1/(p1+p2));
}

let result = bedCalc(person1, person2);
let bedPart = Math.ceil(result*bed);
  
  return (
    <div className="Bed__container">
      <div className="Bed__head">
      <div className="Bed__pillow">
      <span style={{"width": Math.ceil(200*result)+"%"}} className="Bed__pillow--result"></span>
      </div>
      <div className="Bed__pillow"></div>
      </div>
      <div className="Bed__sheet">
      <div className="Bed__sheet--fold"></div>
      <span style={{"width": Math.ceil(100*result)+"%"}} className="Bed__result">{bedPart?"Tu as droit à "+bedPart+"cm":''}</span>
      </div>
    </div>
  );
}

