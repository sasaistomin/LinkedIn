import { Link } from 'react-router-dom';
import './mainNewPost.css';

const TheeOut = ({ itemPVE }) => {
    const items = Object.values(itemPVE || {});
    return (
        <div className='theePVE'>
            {items.map((item, index) => (
                <Link key={index}>
                    {/* <img src={item.img} alt={item.text} /> */}
                    <div className="icon-wrapper" dangerouslySetInnerHTML={{ __html: item.img }} />
                    <p>{item.text}</p>
                </Link>
            ))}
        </div>
    );
}

let photo = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_40002896_2307)"><path d="M23 19C23 19.5304 22.7893 20.0391 22.4142 20.4142C22.0391 20.7893 21.5304 21 21 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V8C1 7.46957 1.21071 6.96086 1.58579 6.58579C1.96086 6.21071 2.46957 6 3 6H7L9 3H15L17 6H21C21.5304 6 22.0391 6.21071 22.4142 6.58579C22.7893 6.96086 23 7.46957 23 8V19Z" stroke="#6C5CE7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /><path d="M12 17C14.2091 17 16 15.2091 16 13C16 10.7909 14.2091 9 12 9C9.79086 9 8 10.7909 8 13C8 15.2091 9.79086 17 12 17Z" stroke="#6C5CE7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></g><defs><clipPath id="clip0_40002896_2307"><rect width="24" height="24" fill="white" /></clipPath></defs></svg>`;
let video = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_40002896_3453)"><path d="M23 7L16 12L23 17V7Z" stroke="#6C5CE7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 5H3C1.89543 5 1 5.89543 1 7V17C1 18.1046 1.89543 19 3 19H14C15.1046 19 16 18.1046 16 17V7C16 5.89543 15.1046 5 14 5Z" stroke="#6C5CE7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_40002896_3453"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>`;
let event = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 4.5C3 3.67157 3.67157 3 4.5 3H19.5C20.3284 3 21 3.67157 21 4.5V19.5C21 20.3284 20.3284 21 19.5 21H4.5C3.67157 21 3 20.3284 3 19.5V4.5ZM19.5 4.5H4.5V19.5H19.5V4.5Z" fill="#6C5CE7"/><path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 1.5C16.9142 1.5 17.25 1.83579 17.25 2.25V5.25C17.25 5.66421 16.9142 6 16.5 6C16.0858 6 15.75 5.66421 15.75 5.25V2.25C15.75 1.83579 16.0858 1.5 16.5 1.5Z" fill="#6C5CE7"/<path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 1.5C7.91421 1.5 8.25 1.83579 8.25 2.25V5.25C8.25 5.66421 7.91421 6 7.5 6C7.08579 6 6.75 5.66421 6.75 5.25V2.25C6.75 1.83579 7.08579 1.5 7.5 1.5Z" fill="#6C5CE7"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3 8.25C3 7.83579 3.33579 7.5 3.75 7.5H20.25C20.6642 7.5 21 7.83579 21 8.25C21 8.66421 20.6642 9 20.25 9H3.75C3.33579 9 3 8.66421 3 8.25Z" fill="#6C5CE7"/><path fill-rule="evenodd" clip-rule="evenodd" d="M15.9209 11.4857C16.2049 11.7872 16.1908 12.2618 15.8893 12.5459L11.5112 16.6709C11.2216 16.9437 10.7694 16.9429 10.4807 16.6691L8.10884 14.4191C7.80832 14.1341 7.79581 13.6593 8.08088 13.3588C8.36595 13.0583 8.84066 13.0458 9.14117 13.3309L10.9986 15.0929L14.8607 11.4541C15.1622 11.1701 15.6368 11.1842 15.9209 11.4857Z" fill="#6C5CE7"/></svg>`;

const PVE = {
    'photo': {
        'img': photo,
        'text': 'Photo'
    },
    'video': {
        'img': video,
        'text': 'Video'
    },
    'event': {
        'img': event,
        'text': 'Event'
    }
}

const MainNewPost = (props) => (
    <div className="mainNewPost">
        <div>
            <img src={props.userAvatar} alt="" />
            <input type="text" />
        </div>
        <span></span>
        <TheeOut itemPVE={PVE} />
    </div>
);

export default MainNewPost;
