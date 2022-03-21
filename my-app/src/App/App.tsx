import { Form }from '../Components/Form/Form';
import { Bed } from '../Components/Bed/Bed';
import { Title }from '../Components/Title/Title';

export const App: React.FC = () =>{
  return (
  <div>
      <Title/>
      <Form weight1={undefined} weight2={undefined} height1={undefined} height2={undefined} bedSize={undefined} />
      <Bed/>
    </div>
  );
}
