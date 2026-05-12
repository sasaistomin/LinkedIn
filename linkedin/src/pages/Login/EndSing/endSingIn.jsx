import './endSingIn.css'
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import LogoTopSign from '../../../component/logoTopSign/logoTopSign';

const EndSingIn = (props) => {
    const inputRefs = useRef([]);

    const handleChange = (e, index) => {
        const value = e.target.value;
        if (value.length === 1 && index < 4) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && !e.target.value && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };


    return (
        <div className='endSignIn'>
            <LogoTopSign img={props.img} />
            <div className='singInHeroEnd'>
                <div className='headText'>
                    <p>{props.textP}</p>
                    <h3>{props.textH}</h3>
                </div>
                <div className='inputSignIn'>
                    {[0, 1, 2, 3, 4].map((id) => (
                        <input
                            key={id}
                            type="text"
                            maxLength="1"
                            inputMode="numeric"
                            ref={(el) => (inputRefs.current[id] = el)}
                            onChange={(e) => handleChange(e, id)}
                            onKeyDown={(e) => handleKeyDown(e, id)}
                            onFocus={(e) => e.target.select()}
                        />
                    ))}
                </div>
                <div className='subDontCodeBack'>
                    <Link to='/mainScreen' className='submit'>
                        <p>{props.linkSub}</p>
                    </Link>
                    <p>{props.dontCodeP} <Link className='sendCode'>{props.dontCodeSpan}</Link></p>
                </div>
                <Link to='/sign-in' className='backSignIn'>
                    <p>{props.back}</p>
                </Link>
            </div>
        </div>
    );
};

export default EndSingIn;