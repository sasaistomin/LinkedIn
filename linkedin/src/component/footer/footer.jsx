import './footer.css';

const OutputLeft = ({ leftList }) => {
    return (
        <>
            {leftList.map((word, index) => (
                <div key={index} className='footerText'>
                    <p>{word}</p>
                </div>
            ))}
        </>
    )
}

const OutLeftRight = ({ rightList }) => {
    const items = Object.values(rightList);
    return (
        <>
            {items.map((item, index) => (
                <div key={index} className='toolsRight'>
                    <img src={item.img} alt="photo" />
                    <div className='textTools'>
                        <h4>{item.textH}</h4>
                        <p>{item.textP}</p>
                    </div>
                </div>
            ))}
        </>
    )
}

const Footer = (props) => (
    <div className="footer">
        <div className='leftFooter'>
            <div className='divLeft'>
                <OutputLeft leftList={props.info.info1} />
            </div>
            <div className='divLeft'>
                <OutputLeft leftList={props.info.info2} />
            </div>
            <div className='divLeft'>
                <OutputLeft leftList={props.info.info3} />
            </div>
        </div>
        <div className='rightFooter'>
            <div className='tools'>
                <OutLeftRight rightList={props.tools} />
            </div>
            <div className='lan'>
                <p className='textLan'>{props.text}</p>
                <div className='language'>
                    <p>{props.language}</p>
                    <img src={props.icon} alt="sda" />
                </div>
            </div>
        </div>
    </div>
);

export default Footer;
