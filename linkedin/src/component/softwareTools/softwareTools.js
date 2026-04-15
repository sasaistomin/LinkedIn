import './softwareTools.css';

const List = ({ item }) => {
    return (
        <>
            {item.map((word, index) => (
                <div key={index} className='chipTools'>{word}</div>
            ))}
        </>
    )
}

const SoftwareTools = (props) => (
    <div className="softwareTools">
        <div className='left'>
            <h2>{props.textH}</h2>
            <p>{props.text}</p>
        </div>
        <div className='right'>
            <List item={props.item} />
        </div>
    </div>
);

export default SoftwareTools;
