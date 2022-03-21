import { FormPropsTypes } from '../../type';
import { Field } from './Field/Field';

import './Form.scss';

// Je peux enregistrer les résultats des personnes dans des tuples
// C'est quoi et ça fait quoi changefield ??

export const Form: React.FC<FormPropsTypes> = ({ weight1, weight2, height1, height2, bedSize }) => {

  return (
    <div>
      <h3 className="Form__title">Renseigne tes infos ici :</h3>
      <form className="Form">
        <div className="Form__row">
          <label>Ton poids</label>
          <Field value={weight1} name='weight1' placeholder='poids en kg'  type='info' />
          <label>Ta taille</label>
          <Field value={height1} name='height1' placeholder='taille en cm' type='info'  />
        </div>
        <div className="Form__row">
          <label>Son poids</label>
          <Field value={weight2} name='weight2' placeholder='poids en kg' type='info'  />
          <label>Sa taille</label>
          <Field value={height2} name='height2' placeholder='taille en cm' type='info'  />
        </div>
        <div className="Form__row">
          <label>Largeur du lit</label>
          <Field value={bedSize} name='bedSizeWeight' placeholder='largeur en cm' type='info'  />
        </div>
      </form>
    </div>
  );
}


