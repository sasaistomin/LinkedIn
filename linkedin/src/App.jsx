import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import SignIn from './pages/Login/signIn'
import logo from './logo.png';
import emailIcon from './email.svg';
import key from './key.svg';
import eye from './eye.svg';
import lockEye from './lockEye.svg';
import googleIcon from './google.svg';
import EndSingIn from './pages/Login/EndSing/endSingIn';

function App() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/sign-in' element={<SignIn img={logo} emailIcom={emailIcon} passwordIcon={key} lockPasswordIcon={eye} lockEye={lockEye} googleIcon={googleIcon}/>}/>
            <Route path='/nextStepSingIn' element={<EndSingIn img={logo}/>} />
        </Routes>
    );
}

export default App;