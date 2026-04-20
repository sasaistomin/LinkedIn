import './postVacancy.css';
import { Link } from 'react-router-dom';

const PostVacancy = (props) => (
    <div className="postVacancy">
        <div>
            <h2 className='textH'>P{props.text}</h2>

            <Link to='/sing-in' className='vacancy'>{props.textLink}</Link>
        </div>
    </div>
);

export default PostVacancy;
