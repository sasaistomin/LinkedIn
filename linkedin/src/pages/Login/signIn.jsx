import LoginGoogleSign from '../../component/loginGoogleSign/loginGoogleSign';
import LogoTopSign from '../../component/logoTopSign/logoTopSign';
import TopSign from '../../component/topSign/topSign';
import './singIn.css';
import { Link } from 'react-router-dom';


const SignIn = (props) => {
    return (
        <div className='mainHero'>
            <LogoTopSign img={props.img} />
            <div className='singIn-hero'>
                <TopSign welcomeText='Welcome back'
                    singInText='sign in your LinkUp account'
                    emailIcon={props.emailIcom}
                    textEmail='Email or phone number'
                    textPassword='Password'
                    passwordIcon={props.passwordIcon}
                    lockPasswordIcon={props.lockPasswordIcon}
                    lockEye={props.lockEye}
                    stepSignIn='/nextStepSingIn'
                    linkText='Sign In'
                    resetPasswordP='Forgot your password?'
                    resetPasswordSpan='Reset password' />
                <div className='orAndSpan'>
                    <span></span>
                    <p>or</p>
                    <span></span>
                </div>
                <LoginGoogleSign
                    googleIcon={props.googleIcon}
                    textGoogle='Continue with Google' t
                    textSingUp='Sign Up'
                    linkSing='/sign-up' />
            </div>
        </div>
    );
}

export default SignIn;
