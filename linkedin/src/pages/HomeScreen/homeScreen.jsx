import Footer from '../../component/footer/footer';
import HeaderMain from '../../component/headerMain/headerMain';
import lanIcon from '../../lanIcon.svg';
import question from '../../question.svg';
import manage from '../../gearSix.svg';
import recommended from '../../recommended.svg';
import home from '../../home.svg';
import './homeScreen.css';

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
        'img': 'sf',
        'text': 'Home'
    },
    'section2': {
        'img': 'asd',
        'text': 'Network'
    },
    'section3': {
        'img': 'asd',
        'text': 'Vacancies'
    },
    'section4': {
        'img': 'das',
        'text': 'Messages'
    },
    'section5': {
        'img': 'fds',
        'text': 'Notifications'
    }
}

const HomeScreen = (props) => (
    <div>
        <header>
            <HeaderMain logo={props.logo}/>
        </header>
        <footer>
            <Footer info={textInfoFooter} tools={textToolsFooter} text='Language' language='English' icon={lanIcon} />
        </footer>
    </div>
);

export default HomeScreen;