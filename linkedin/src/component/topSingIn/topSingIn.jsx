import './topSingIn.css';
import { Link } from 'react-router-dom';

const TopSingIn = (props) => (
    <div className="topSingIn">
        <div>
            <p>{ props.welcomeText }</p>
            <h3>{ props.singInText }</h3>
        </div>
        <div>
            <div>
                <img src={ props.email } alt='emailIcon' />
                <input placeholder={ props.textEmail } />
            </div>
            <div>
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
