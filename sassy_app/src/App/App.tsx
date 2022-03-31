import { Form }from '../Components/Form/Form';
import { Title }from '../Components/Title/Title';

export const App: React.FC = () =>{
  return (
  <div>
      <Title/>
      <Form newValue={{
        weight1: '',
        weight2: '',
        height1: '',
        height2: '',
        bedSize: ''
      }} />
    </div>
  );
}
