import './topSingIn.css';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';



const ChekitInput = (props) => {
    const [setVievPassword, setLockPassword] = useState(false);
    const toblerPassword = () => {
        setLockPassword(!setVievPassword)
    }
    if (props.textConfirmPassword === 'Confirm password') {
        return (
            <div className='passwordInputCheck'>
                <img className='lock' src={props.passwordIcon} />
                <input type={setVievPassword ? "text" : "password"} placeholder={props.textConfirmPassword} id='password-input' name='password' />
                <img className={`eye ${setVievPassword ? 'viev' : ''}`} src={setVievPassword ? props.lockEye : props.lockPasswordIcon} onClick={toblerPassword} />
            </div>
        );
    }
};

const TopSingIn = (props) => {
    const [setVievPassword, setLockPassword] = useState(false);
    const toblerPassword = () => {
        setLockPassword(!setVievPassword)
    }

    return (
        <div className="topSingIn">
            <div className='topSing'>
                <p>{props.welcomeText}</p>
                <h3>{props.singInText}</h3>
            </div>
            <div>
                <div className='emailInput'>
                    <img src={props.emailIcon} alt='emailIcon' />
                    <input type="email" placeholder={props.textEmail} />
                </div>
                <div className='passwordInput'>
                    <img className='lock' src={props.passwordIcon} />
                    <input type={setVievPassword ? "text" : "password"} placeholder={props.textPassword} id='password-input' name='password' />
                    <img className={`eye ${setVievPassword ? 'viev' : ''}`} src={setVievPassword ? props.lockEye : props.lockPasswordIcon} onClick={toblerPassword} />
                </div>
                <ChekitInput
                    textConfirmPassword={props.textConfirmPassword}
                    passwordIcon={props.passwordIcon}
                    lockEye={props.lockEye}
                    lockPasswordIcon={props.lockPasswordIcon}
                />
                <Link to={props.stepSignIn} className='linkButton'>
                    <p>{props.linkText}</p>
                </Link>
                <p className='resetPassword'>{props.resetPasswordP} <Link>{props.resetPasswordSpan}</Link></p>
            </div>

        </div>
    );
};


export default TopSingIn;
