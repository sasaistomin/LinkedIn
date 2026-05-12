import MainNewPost from '../mainNewPost/mainNewPost';
import './mainSceenCompouner.css';

const MainSceenCompouner = (props) => (
  <div className="mainSceenCompouner">
    <MainNewPost userAvatar={props.userAvatar}/>
  </div>
);

export default MainSceenCompouner;
