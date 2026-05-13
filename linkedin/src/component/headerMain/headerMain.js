import './headerMain.css';
import { Link } from 'react-router-dom';
import homeScreen from '../../homeScreen.svg';
import netWork from '../../network.svg';
import vacancies from '../../vacancies.svg';
import messages from '../../messages.svg';
import notifications from '../../notifications.svg';

let textAndIconHeader = {
    'section1': {
        'img': homeScreen,
        'text': 'Home'
    },
    'section2': {
        'img': netWork,
        'text': 'Network'
    },
    'section3': {
        'img': vacancies,
        'text': 'Vacancies'
    },
    'section4': {
        'img': messages,
        'text': 'Messages'
    },
    'section5': {
        'img': notifications,
        'text': 'Notifications'
    }
}


const OutLine = ({ nav }) => {
    const items = Object.values(nav || {});
    return (
        <div className="nav-container">
            {items.map((item, index, to) => (
                <Link key={index} className='nav-item'>
                    <img src={item.img} alt={item.text} />
                    <p>{item.text}</p>
                </Link>
            ))}
        </div>
    );
}

const HomeLeftHeader = (props) => (
    <div className='logoHeader'>
        <Link to='/'>
            <img src={props.logo} alt='logo' />
        </Link>
    </div>
);

const HomeCenterHeader = (props) => (
    <div className='headerCenter'>
        <div className='inputSearch'>
            <img src={props.search} alt="search" />
            <input type="text" name='search' placeholder='Search'/>
        </div>

        <OutLine nav={props.hNav} />

    </div>

);


const HomeRightHeader = ({ profileImg }) => (
    <div className='nav-profile'>
        <img src={profileImg} alt="My Profile" className="avatar" />
        <p>My Profile</p>
    </div>
);


const HeaderMain = (props) => (
    <div className="headerMain">
        <div className="header-content">
            <HomeLeftHeader logo={props.logo} />
            <HomeCenterHeader hNav={textAndIconHeader} search={props.search}/>
            <HomeRightHeader profileImg={props.userAvatar} />
        </div>
    </div>
);



export default HeaderMain;
