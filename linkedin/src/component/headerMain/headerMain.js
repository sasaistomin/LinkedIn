import './headerMain.css';
import { Link } from 'react-router-dom';

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
            <HomeCenterHeader hNav={props.hNav} search={props.search}/>
            <HomeRightHeader profileImg={props.userAvatar} />
        </div>
    </div>
);

export default HeaderMain;
