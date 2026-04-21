import TopSingIn from '../../component/topSingIn/topSingIn';
import './singIn.css';
import { Routes, Route } from 'react-router-dom';

const SingIn = (props) => {
    return (
        <div className='mainHero'>
            <div className='logo'>
                <img src={props.img} alt="" />
            </div>
            
            <div className='singIn-hero'>
                <TopSingIn welcomeText='Welcome back' 
                singInText='sign in your LinkUp account' 
                emailIcom={props.emailIcom}
                textEmail='Email or phone number'
                textPassword='Password'
                passwordIcon={props.passwordIcon} 
                lockPasswordIcon={props.lockPasswordIcon} 
                linkText='Sign In' 
                resetPasswordP='Forgot your password?' 
                resetPasswordSpan='Reset password'/>
            </div>
        </div>
    );
}

export default SingIn;