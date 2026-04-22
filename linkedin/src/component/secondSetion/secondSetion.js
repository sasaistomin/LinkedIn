import './secondSetion.css';
import { Link } from 'react-router-dom';

const List = ({ item }) => {
    return (
        <Link to='sign-in'>
            {item.map((word, index) => (
                <div key={index} className='chip'>{word}</div>
            ))}
        </Link>
    );
};

const SecondSetion = (props) => {
    return (
        <div className="secondSetion">
            <div className='textLeft'>
                <h2 className='text'>{props.text}</h2>
            </div>
            <div className='listRight'>
                <List item={props.item}/>
            </div>
        </div>
    );
};

export default SecondSetion;
