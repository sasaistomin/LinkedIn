import Footer from '../../component/footer/footer';
import HeaderMain from '../../component/headerMain/headerMain';
import lanIcon from '../../lanIcon.svg';
import question from '../../question.svg';
import manage from '../../gearSix.svg';
import recommended from '../../recommended.svg';
import home from '../../home.svg';
import './homeScreen.css';

import homeScreen from '../../homeScreen.svg';
import netWork from '../../network.svg';
import vacancies from '../../vacancies.svg';
import messages from '../../messages.svg';
import notifications from '../../notifications.svg';
// import profile from '';

import search from '../../search.svg';
import userAvatar from '../../assets/777.png'

export let textInfoFooter = {
    'info1': ['General information', 'Careers', 'Add Settings', 'Security Center'],
    'info2': ['Accessibility', 'Privacy and Terms', 'Mobile Phone'],
    'info3': ['Policies for the Professional Community', 'Sales Solutions', 'Advertising Solutions']
}

export let textToolsFooter = {
    'title1': {
        'img': question,
        'textH': 'Question?',
        'textP': 'Visit our Help Center.'
    },
    'title2': {
        'img': manage,
        'textH': 'Manage Account and Privacy',
        'textP': 'Go to settings.'
    },
    'title3': {
        'img': recommended,
        'textH': 'Recommendation Transparency',
        'textP': 'Learn more about recommended content.'
    }
}

export let textAndIconHeader = {
    'section1': {
        'img': homeScreen,
        'text': 'Home'
    },
    'section2': {
        'img': netWork,
        'text': 'Network'
    },
    'section3': {
        'img': vacancies,
        'text': 'Vacancies'
    },
    'section4': {
        'img': messages,
        'text': 'Messages'
    },
    'section5': {
        'img': notifications,
        'text': 'Notifications'
    }
}

const HomeScreen = (props) => (
    <div>
        <header className='header'>
            <HeaderMain logo={props.logo} hNav={textAndIconHeader} search={search} userAvatar={userAvatar}/>
        </header>
        
        <footer>
            <Footer info={textInfoFooter} tools={textToolsFooter} text='Language' language='English' icon={lanIcon} />
        </footer>
    </div>
);

export default HomeScreen;