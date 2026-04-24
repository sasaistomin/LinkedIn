import LoginGoogleSign from '../../component/loginGoogleSign/loginGoogleSign';
import LogoTopSign from '../../component/logoTopSign/logoTopSign';
import TopSign from '../../component/topSign/topSign';
import './singIn.css';
import { Link } from 'react-router-dom';



const SignUp = (props) => {
    return (
        <div className='mainHero'>
            <LogoTopSign img={props.img} />
            <div className='singIn-hero'>
                <TopSign welcomeText='Welcome to your'
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
                <LoginGoogleSign
                    googleIcon={props.googleIcon}
                    textGoogle='Continue with Google' t
                    textSingUp='Sign In'
                    linkSing='/sign-in' />
            </div>
        </div>
    );
}

export default SignUp;
