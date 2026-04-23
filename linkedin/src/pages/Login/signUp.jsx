import LoginGoogleSingUp from '../../component/loginGoogleSingUp/loginGoogleSingUp';
import LogoTopSign from '../../component/logoTopSign/logoTopSign';
import TopSingIn from '../../component/topSingIn/topSingIn';
import EndSingIn from './EndSing/endSingIn';
import './singIn.css';
import { Link } from 'react-router-dom';



const SignUp = (props) => {
    return (
        <div className='mainHero'>
            <LogoTopSign img={props.img} />
            <div className='singIn-hero'>
                <TopSingIn welcomeText='Welcome to your'
                    singInText='professional community'
                    emailIcon={props.emailIcom}
                    textEmail='Email or phone number'
                    textPassword='Password'
                    textConfirmPassword='Confirm password'
                    passwordIcon={props.passwordIcon}
                    lockPasswordIcon={props.lockPasswordIcon}
                    lockEye={props.lockEye}
                    stepSignIn='/nextStepSingUp'
                    linkText='Sign Up'
                    resetPasswordP='By Signing Up, you agree to our'
                    resetPasswordSpan='Terms of Service and Privacy Policy' />
                <div className='orAndSpan'>
                    <span></span>
                    <p>or</p>
                    <span></span>
                </div>
                <LoginGoogleSingUp
                    googleIcon={props.googleIcon}
                    textGoogle='Continue with Google' t
                    textSingUp='Sign In'
                    linkSing='/sign-in' />
            </div>
        </div>
    );
}

export default SignUp;
