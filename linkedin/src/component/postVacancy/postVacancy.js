import './postVacancy.css';
import { Link } from 'react-router-dom';

const PostVacancy = (props) => (
    <div className="postVacancy">
        <div>
            <h2 className='textH'>{props.text}</h2>

            <Link to='sign-in' className='vacancy'>{props.textLink}</Link>
        </div>
    </div>
);

export default PostVacancy;
