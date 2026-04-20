import './topSingIn.css';

const TopSingIn = (props) => (
    <div className="topSingIn">
        <div>
            <p>{ }</p>
            <h3>{ }</h3>
        </div>
        <div>
            <div>
                <img src={ props.email } alt='emailIcon' />
                <input placeholder={ props.textEmail } />
            </div>
        </div>
        
    </div>
);

export default TopSingIn;
