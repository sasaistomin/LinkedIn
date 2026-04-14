import './header.css';
import { Link } from 'react-router-dom';

const Header = (props) => (
    <header className="headerApp">
        <div className='logo'>
            <img src={props.logo} alt='logo' />
        </div>
        <div className='nav'>
            <nav>
                <Link className='n1' to="/Sign-In">Sign In</Link>
                <Link className='n2' to="/Sign-Up">Sign Up</Link>
            </nav>
        </div>
    </header>
);

export default Header;
