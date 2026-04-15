import './secondSetion.css';

const List = ({ item }) => {
    return (
        <>
            {item.map((word, index) => (
                <div key={index} className='chip'>{word}</div>
            ))}
        </>
    );
};

const SecondSetion = (props) => (
    <div className="secondSetion">
        <div className='textLeft'>
            <h2 className='text'>{props.text}</h2>
        </div>
        <div className='listRight'>
            <List item={props.item}/>
        </div>
    </div>
);

export default SecondSetion;
