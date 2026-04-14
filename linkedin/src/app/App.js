
import '../styles/App.css';
import logo from './logo.png';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div>
                    <img src={logo} alt='logo'/>
                </div>
                <div>
                    <nav>
                        <Link to="/Sign-In">Sign In</Link>
                        <Link to="/Sign-Up">Sign Up</Link>
                    </nav>
                </div>
            </header>
            <div className='mainSection'>
                <div className='Sleft'>

                </div>
                <div className='Sright'>

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
