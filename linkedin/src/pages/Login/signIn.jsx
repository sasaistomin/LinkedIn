import LoginGoogleSingUp from '../../component/loginGoogleSingUp/loginGoogleSingUp';
import TopSingIn from '../../component/topSingIn/topSingIn';
import EndSingIn from './EndSing/endSingIn';
import './singIn.css';
import { Link } from 'react-router-dom';


const SignIn = (props) => {
    return (
        <div className='mainHero'>
            <Link to='/' className='logo'>
                <img src={props.img} alt="" />
            </Link>

            <div className='singIn-hero'>
                <TopSingIn welcomeText='Welcome back'
                    singInText='sign in your LinkUp account'
                    emailIcon={props.emailIcom}
                    textEmail='Email or phone number'
                    textPassword='Password'
                    passwordIcon={props.passwordIcon}
                    lockPasswordIcon={props.lockPasswordIcon}
                    lockEye={props.lockEye}
                    linkText='Sign In'
                    resetPasswordP='Forgot your password?'
                    resetPasswordSpan='Reset password' />
                <div className='orAndSpan'>
                    <span></span>
                    <p>or</p>
                    <span></span>
                </div>
                <LoginGoogleSingUp googleIcon={props.googleIcon} textGoogle='Continue with Google' textSingUp='Sign Up' />
            </div>
        </div>
    );
}

export default SignIn;
