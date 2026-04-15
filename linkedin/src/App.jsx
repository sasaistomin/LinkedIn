import './styles/App.css';
import logo from './logo.png';
import photo from './photo.png';
import { Link } from 'react-router-dom';
import Header from './component/header/header';
import FirstSection from './component/firstSection/firstSection';
import SecondSetion from './component/secondSetion/secondSetion';

let textlist = [
    'Engineering', 
    'Business development', 
    'Finance', 
    'Administrative Assistant',
    'Retail employee',
    'Help Desk',
    'Operations',
    'Information Technology',
    'Marketing',
    'Personnel support',
    'Education',
    'Sales'
]

function App() {
    return (
        <div className="App">
            <Header logo={logo} />

            <FirstSection
                h1={<>Welcome <br /> to the community specialists!</>}
                text={<>By clicking "Continue" to join or sign in, you <br /> agree to the terms of the LinkedIn User <br /> Agreement, Privacy Policy, and Cookie Policy.</>} 
                photo={photo}/>

            <SecondSetion text={<>Find a suitable vacancy or <br /> internship</>} item={textlist}/>
            
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
