import './firstSection.css';
import { Link } from 'react-router-dom';

const FirstSection = (props) => (
    <div className='mainSection'>
        <div className='Sleft'>
            <h1>{props.h1}</h1>
            <nav>
                <Link className='loginGoogle' to='login-google'>Login with Google</Link>
                <Link className='loginEmail' to='login-email'>login by email addressd</Link>
            </nav>
            <p>{props.text}</p>
            <div className='join'><p>Not on LinkedIn?</p><Link to="/sign-up">Join</Link></div>
        </div>
        <div className='Sright'>
            <img src={props.photo} alt='photo' />
        </div>
    </div>
);

export default FirstSection;
