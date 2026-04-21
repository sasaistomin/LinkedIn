import './softwareTools.css';
import { Link } from 'react-router-dom';

const List = ({ item }) => {
    return (
        <Link to='login'>
            {item.map((word, index) => (
                <div key={index} className='chipTools'>{word}</div>
            ))}
        </Link>
    )
}

const SoftwareTools = (props) => (
    <div className="softwareTools">
        <div className='leftTools'>
            <h2>{props.textH}</h2>
            <p>{props.text}</p>
        </div>
        <div className='right'>
            <List item={props.item} />
        </div>
    </div>
);

export default SoftwareTools;