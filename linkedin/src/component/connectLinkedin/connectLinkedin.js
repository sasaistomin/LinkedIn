import './connectLinkedin.css';
import { Link } from 'react-router-dom';

const ConnectLinkedin = (props) => (
    <div className="connectLinkedin">
        <h2>{props.text}</h2>
        <Link to='sign-in'>Login</Link>
    </div>
);

export default ConnectLinkedin;
