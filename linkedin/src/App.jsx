import './styles/App.css';
import question from './question.svg';
import manage from './gearSix.svg';
import recommended from './recommended.svg';
import logo from './logo.png';
import photo from './photo.png';
import lanIcon from './lanIcon.svg';
import emailIcon from './email.svg'
import key from './key.svg';
import eye from './eye.svg';
import Header from './component/header/header';
import FirstSection from './component/firstSection/firstSection';
import SecondSetion from './component/secondSetion/secondSetion';
import PostVacancy from './component/postVacancy/postVacancy';
import SoftwareTools from './component/softwareTools/softwareTools';
import ConnectLinkedin from './component/connectLinkedin/connectLinkedin';
import Footer from './component/footer/footer';
import SingIn from './pages/Login/singIn'
import { Routes, Route } from 'react-router-dom';
// import BtnNewPost from './component/BtnNewPost/BtnNewPost';

let textlist = [
    'Engineering',
    'Business development',
    'Finance',
    'Administrative Assistant',
    'Retail employee',
    'Help Desk',
    'Operations',
    'Information Technology',
    'Marketing',
    'Personnel support',
    'Education',
    'Sales'
];

let textTools = [
    'E-commerce platforms',
    'Recruiting Software',
    'Software for CRM systems',
    'Social Networking Software',
    'HR systems',
    'Project Management Software'
];

let textInfoFooter = {
    'info1': ['General information', 'Careers', 'Add Settings', 'Security Center'],
    'info2': ['Accessibility', 'Privacy and Terms', 'Mobile Phone'],
    'info3': ['Policies for the Professional Community', 'Sales Solutions', 'Advertising Solutions']
}

let textToolsFooter = {
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

function App() {
    return (
        <Routes>
            <Route path='/' element={
                <>
                    <Header logo={logo} />
                    <FirstSection
                        h1={<>Welcome <br /> to the community specialists!</>}
                        text={<>By clicking "Continue" to join or sign in, you <br /> agree to the terms of the LinkedIn User <br /> Agreement, Privacy Policy, and Cookie Policy.</>}
                        photo={photo} />
                    <SecondSetion text={<>Find a suitable vacancy or <br /> internship</>} item={textlist} />
                    <PostVacancy text='Post your vacancy so millions of people can see it' textLink='Post a vacancy' />
                    <SoftwareTools textH={<>Discover the best <br /> software tools</>} text={<>Connect with buyers who have <br /> first-hand experience to find the <br /> best products for you.</>} item={textTools} />
                    <ConnectLinkedin text={<>Connect with your colleagues, <br /> classmates and friends on LinkedIn.</>} />
                    <Footer info={textInfoFooter} tools={textToolsFooter} text='Language' language='English' icon={lanIcon} />
                </>
            } />
            <Route path='/sign-in' element={<SingIn img={logo} emailIcom={emailIcon} passwordIcon={key} lockPasswordIcon={eye} />} />

        </Routes>
    );
}

export default App;