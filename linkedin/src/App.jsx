import './styles/App.css';
import logo from './logo.png';
import photo from './photo.png';
import { Link } from 'react-router-dom';
import Header from './component/header/header';

function App() {
    return (
        <div className="App">
            <Header logo={logo}/>
            <div className='mainSection'>
                <div className='Sleft'>
                    <h1>Welcome <br /> to the community specialists!</h1>
                    <nav>
                        <Link className='loginGoogle'>Login with Google</Link>
                        <Link className='loginEmail'>login by email addressd</Link>
                    </nav>
                    <p>By clicking "Continue" to join or sign in, you <br /> agree to the terms of the LinkedIn User <br /> Agreement, Privacy Policy, and Cookie Policy.</p>
                    <div className='join'><p>Not on LinkedIn?</p><Link to="/Sign-In">Join</Link></div>
                </div>
                <div className='Sright'>
                    <img src={photo} anl='photo' />
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
