import React from 'react';

import { Form }from '../Components/Form/Form';
import { Bed } from '../Components/Bed/Bed';
import { Title }from '../Components/Title/Title';
import { AppPropsTypes } from '../type';

export const App: React.FC<AppPropsTypes> = () =>{
  return (
  <div>
      <Title/>
      <Form weight1={'number'} weight2={'number'} height1={'number'} height2={'number'} bedSize={'number'} changeField={function (): void {
        throw new Error('Function not implemented.');
      } }/>
      <Bed/>
    </div>
  );
}
