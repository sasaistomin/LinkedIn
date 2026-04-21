import './topSingIn.css';
import { Link } from 'react-router-dom';

const TopSingIn = (props) => (
    <div className="topSingIn">
        <div className='topSing'>
            <p>{ props.welcomeText }</p>
            <h3>{ props.singInText }</h3>
        </div>
        <div>
            <div className='emailInput'>
                <img src={ props.emailIcon } alt='emailIcon' />
                <input type="email" placeholder={ props.textEmail } />
            </div>
            <div className='passwordInput'>
                <img src={props.passwordIcon} />
                <input type="password" placeholder={ props.textPassword } />
                <img src={props.lockPasswordIcon} alt="" />
            </div>
            <Link>{props.linkText}</Link>
            <p>{props.resetPasswordP} <Link>{props.resetPasswordSpan}</Link></p>
        </div>
        
    </div>
);

export default TopSingIn;
