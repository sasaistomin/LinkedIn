import './header.css';
import { Link } from 'react-router-dom';

export function Test()
{
    return <div>Test</div>



const Header = (props) => (
    <header className="headerApp">
        <div className='logo'>
            <img src={props.logo} alt='logo' />
        </div>
        <div className='nav'>
            <nav>
                <Link className='n1' to="/sign-in">Sign In</Link>
                <Link className='n2' to="/sign-up">Sign Up</Link>
            </nav>
        </div>
    </header>
);

export default Header;
