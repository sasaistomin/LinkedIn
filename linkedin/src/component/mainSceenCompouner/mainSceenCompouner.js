import MainNewPost from '../mainNewPost/mainNewPost';
import './mainSceenCompouner.css';

import ChristianNolan from '../../ChristianNolan.png';
import ChristianNolanPost from '../../ChristianNolanPhoto.png'

import JonathanMatthews from '../../JonathanMatthews.png';
import JonathanMatthewsPost from '../../JonathanMatthewsPhoto.png';
import OutLinePost from '../posts/posts';

let postsList = {
    'post1': {
        'photoPerson': ChristianNolan,
        'namePerson': 'Christian Nolan',
        'rankPerson': 'Junior UI/UX Designer · Microsoft',
        'timeAgo': '2h ago',
        'textPost': '“The dumbest mistake is viewing design as something you do at the end of the process to ‘tidy up’ the mess, as opposed to understanding it’s a ‘day one’ issue and part of everything. - Tom Peterson',
        'photoPost': ChristianNolanPost
    },
    'post2': {
        'photoPerson': JonathanMatthews,
        'namePerson': 'Jonathan Matthews',
        'rankPerson': 'UI/UX Designer · RyanAir',
        'timeAgo': '2h ago',
        'textPost': 'Users will tell you what they think they want. Users will tell you what they think you want to hear. Users will tell you what they think sounds good. Users will not tell you what you need to know. You have to watch them to discover that. - Adam Judge',
        'photoPost': JonathanMatthewsPost
    }
}


const MainSceenCompouner = (props) => (
  <div className="mainSceenCompouner">
    <MainNewPost userAvatar={props.userAvatar}/>
    <OutLinePost posts={postsList} /> 
  </div>
);

export default MainSceenCompouner;
