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
import EndSingUp from './pages/Login/EndSing/endSingUp';
import SignUp from './pages/Login/signUp';

function App() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/sign-in' element={<SignIn
                img={logo}
                emailIcom={emailIcon}
                passwordIcon={key}
                lockPasswordIcon={eye}
                lockEye={lockEye}
                googleIcon={googleIcon} />} />
            <Route path='/nextStepSingIn' element={<EndSingIn
                img={logo}
                textP='One more step'
                textH='enter the authentication code'
                linkSub='Submit' 
                dontCodeP='Didn’t receive the code?' dontCodeSpan='Send the code again'
                back='Back'/>} />
            <Route path='/sign-up' element={<SignUp
                img={logo}
                emailIcom={emailIcon}
                passwordIcon={key}
                lockPasswordIcon={eye}
                lockEye={lockEye}
                googleIcon={googleIcon} />} />
            <Route path='/nextStepSingUp' element={<EndSingUp
                img={logo}
                textP='One last step'
                textH='enter the verification code'
                linkSub='Submit' 
                dontCodeP='Didn’t receive the code?' dontCodeSpan='Send the code again'
                back='Back'/>} />
        </Routes>
    );
}

export default App;