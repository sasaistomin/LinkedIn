import './headerMain.css';
import { Link } from 'react-router-dom';

const OutLine = ({nav}) => {
    const items = Object.values(nav);
    return(
        <>
            {items.map((item, index) => (
                <div key={index} className='nav'>
                    <img src={item.img} alt="photo" />
                    <div>
                        <p>{item.text}</p>
                    </div>
                </div>
            ))}
        </>
    );
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
        <div>
            <OutLine nav={props.hNav} />
        </div>
    </div>

);


// const HomeRightHeader = (props) => (

// );


const HeaderMain = (props) => (
    <div className="headerMain">
        <div>
            <HomeLeftHeader logo={props.logo} hNav={props.textAndIconHeader}/>
            <HomeCenterHeader />
            {/* <HomeRightHeader /> */}
        </div>
    </div>
);

export default HeaderMain;
