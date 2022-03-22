import { Form }from '../Components/Form/Form';
import { Bed } from '../Components/Bed/Bed';
import { Title }from '../Components/Title/Title';

export const App: React.FC = () =>{
  return (
  <div>
      <Title/>
      <Form newValue={{}} />
      <Bed/>
    </div>
  );
}
