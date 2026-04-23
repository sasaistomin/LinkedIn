import { Link } from 'react-router-dom';
import './logoTopSign.css';

const LogoTopSign = (props) => (
  <div className="logoTopSign">
    <Link to='/' className='logo'>
        <img src={props.img} alt="" />
    </Link>
  </div>
);

export default LogoTopSign;
