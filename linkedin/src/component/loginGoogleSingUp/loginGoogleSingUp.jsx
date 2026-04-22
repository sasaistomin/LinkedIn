import { Link } from 'react-router-dom';
import './loginGoogleSingUp.css';


const LoginGoogleSingUp = (props) => (
    <div className="loginGoogleSingUp">
        <Link to='profile' className='linkGoogle'>
            <img src={props.googleIcon} alt="google" />
            <p>{props.textGoogle}</p>
        </Link>
        <Link to='profile' className='linkSingUp'>
            <p>{props.textSingUp}</p>
        </Link>
    </div>
);

export default LoginGoogleSingUp;
