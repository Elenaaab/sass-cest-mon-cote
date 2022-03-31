import { useState } from 'react';
import { PropsTypes } from '../../type';
import { Bed }from './Bed/Bed';

import './Form.scss';

export const Form: React.FC<PropsTypes> = () => {

  let [newValue, setNewValue] = useState({weight1:"",weight2:"",height1:"",height2:"",bedSize:""});

  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setNewValue({...newValue,[event.target.name]:event.target.value});
  };

  return (
    <div>
      <h3 className="Form__title">Renseigne tes infos ici :</h3>
      <form className="Form">
        <div className="Form__row">
          <label>Ton poids</label>
          <input value={newValue.weight1||''} className="Form__input"
          name='weight1' placeholder='en kg' type='info' onChange={handleChange}
          />
          <label>Ta taille</label>
          <input value={newValue.height1||''} className="Form__input" 
          name='height1' placeholder='en cm' type='info' onChange={handleChange}
 />
        </div>
        <div className="Form__row">
          <label>Son poids</label>
          <input value={newValue.weight2||''} className="Form__input" 
          name='weight2' placeholder='en kg' type='info' onChange={handleChange}
 />
          <label>Sa taille</label>
          <input value={newValue.height2||''} className="Form__input" 
          name='height2' placeholder='en cm' type='info' onChange={handleChange}
  />
        </div>
        <div className="Form__row">
          <label>Largeur du lit</label>
          <input value={newValue.bedSize||''} className="Form__input" 
          name='bedSize' placeholder='en cm' type='info' onChange={handleChange}
  />
        </div>
      </form>
      <Bed newValue={newValue}/>
    </div>
  );
}


