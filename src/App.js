
import { Inscription } from './components/inscription/inscription';
import { Routes,Route } from 'react-router-dom';
import { ForgetPassword } from './components/forgetpassword/forgetpassword';
import { DashbordHotelView } from './components/dashbord/dashbordHotelView';
import { Dashbord } from './components/dashbord/dashbord';
import { Connexion } from './components/connexion/connexion';

function App() {
  return (
    <div>

    <Routes>
<Route path='/' element={<Connexion></Connexion>}></Route>
<Route path='/inscription' element={<Inscription></Inscription>}></Route>
<Route path='/dashbord' element={<Dashbord></Dashbord>}></Route>
<Route path='/forget' element={<ForgetPassword></ForgetPassword>}></Route>
<Route path='/hotels' element={<DashbordHotelView></DashbordHotelView>}></Route>





    </Routes>

 
    </div>
  );
}

export default App;
