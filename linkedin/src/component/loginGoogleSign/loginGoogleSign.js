import './loginGoogleSign.css';
import { Link } from 'react-router-dom';

const LoginGoogleSign= (props) => (
    <div className="loginGoogleSign">
        <Link to='profile' className='linkGoogle'>
            <img src={props.googleIcon} alt="google" />
            <p>{props.textGoogle}</p>
        </Link>
        <Link to={props.linkSing} className='linkSingUp'>
            <p>{props.textSingUp}</p>
        </Link>
    </div>
);

export default LoginGoogleSign;
