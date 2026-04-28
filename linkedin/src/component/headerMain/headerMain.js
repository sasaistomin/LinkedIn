import './headerMain.css';
import { Link } from 'react-router-dom';

const OutLine = () => {
    
}

const HomeLeftHeader = (props) => (
    <div className='logo'>
        <Link to='/'>
            <img src={props.logo} alt='logo' />
        </Link>
    </div>
);

const HomeCenterHeader = (props) => (
    <div>
        <input type="text" />

    </div>

);


// const HomeRightHeader = (props) => (

// );


const HeaderMain = (props) => (
    <div className="headerMain">
        <HomeLeftHeader logo={props.logo} />
        <HomeCenterHeader />
        {/* <HomeRightHeader /> */}
    </div>
);

export default HeaderMain;
