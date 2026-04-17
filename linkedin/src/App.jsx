import './styles/App.css';
import logo from './logo.png';
import photo from './photo.png';
import { Link } from 'react-router-dom';
import Header from './component/header/header';
import FirstSection from './component/firstSection/firstSection';
import SecondSetion from './component/secondSetion/secondSetion';
import BtnNewPost from "./component/BtnNewPost/BtnNewPost";
import React, { useState } from "react";
import NetworkScreens from "./pages/NetworkScreens/NetworkScreens";

function App() {
         const [open, setOpen] = useState(false);
    return ( 
        // <div className="App">
        //     <Header logo={logo} />

        //     <FirstSection
        //         h1={<>Welcome <br /> to the community specialists!</>}
        //         text={<>By clicking "Continue" to join or sign in, you <br /> agree to the terms of the LinkedIn User <br /> Agreement, Privacy Policy, and Cookie Policy.</>} 
        //         photo={photo}/>

        //     <SecondSetion text='Find a suitable vacancy or internship'/>
        //     {/* <div>
        //         <div>

        //         </div>
        //     </div> */}
        //     <footer>
        //         <div className='footerLeft'>

        //         </div>
        //         <div className='footerRight'>

        //         </div>
         <div>
      <NetworkScreens />
    </div>
              
    //   {/* <BtnNewPost /> */}
        //      </footer>
        // </div>

    );
}

export default App;
