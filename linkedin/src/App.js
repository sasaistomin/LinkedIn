import logo from './logo.png';
import photo from './photo.png'
import './App.css';
import { Link } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <header className="headerApp">
                <div className='logo'>
                    <img src={logo} alt='logo' />
                </div>
                <div className='nav'>
                    <nav>
                        <Link className='n1' to="/Sign-In">Sign In</Link>
                        <Link className='n2' to="/Sign-Up">Sign Up</Link>
                    </nav>
                </div>
            </header>
            <div className='mainSection'>
                <div className='Sleft'>
                    <h1></h1>
                    <Link className='loginGoogle'>Login with Google</Link>
                    <Link className='loginEmail'>login by email addressd</Link>
                    <p></p>
                    <div><p></p><Link></Link></div>
                </div>
                <div className='Sright'>
                    <img src={photo} anl='photo'/>
                </div>
            </div>
            <div>
                <div className='mainTextLeft'>

                </div>
                <div className='mainListRigft'>

                </div>
            </div>
            {/* <div>
                <div>

                </div>
            </div> */}
            <footer>
                <div className='footerLeft'>

                </div>
                <div className='footerRight'>

                </div>
            </footer>
        </div>

    );
}

export default App;
