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
                <TopSingIn welcomeText='' 
                singInText='' 
                emailIcom={}
                passwordIcon={} 
                lockPasswordIcon={} 
                linkText='' 
                resetPasswordP='' 
                resetPasswordSpan=''/>
            </div>
        </div>
    );
}

export default SingIn;