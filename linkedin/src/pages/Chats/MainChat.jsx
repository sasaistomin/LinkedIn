import React, { useState } from 'react';
import ChatList from './ChatList';
import ChatWindow from './ChatWindow';

import UserProfileSidebar from './UserProfileSidebar';
import photo1 from '../../assets/norpфото.webp'
import photo2 from '../../assets/mystatphoto.webp'
import photo3 from '../../assets/IMG_20240816_191720_350.webp'
import photo4 from  '../../assets/1000146412.webp'
import photo5 from '../../assets/photo_5193170555778489933_y.webp'
import photo6 from  '../../assets/653353AD-6F93-4FB7-94D3-1366BDADE4EF.webp' 
import photo7 from  '../../assets/E7FD316D-7D79-493C-934C-FC7472849C01.webp'
import photo8 from  '../../assets/5339413118465466920.webp'
import photo9 from  '../../assets/20250315_210100.webp'
import photo10 from '../../assets/6F2EAF82-206A-4B47-B182-C10A5315146B.webp'
import photo11 from  '../../assets/E7D3F4D7-8926-4049-80A7-378BB04E8943.webp'

import './MainChat.css';
import HeaderMain from '../../component/headerMain/headerMain';

import homeScreen from '../../homeScreen.svg';
import netWork from '../../network.svg';
import vacancies from '../../vacancies.svg';
import messages from '../../messages.svg';
import notifications from '../../notifications.svg';
import search from '../../search.svg';
import userAvatar from '../../assets/777.png'

const usersData = [
  {
    id: 1,
    user: {
      name: "Ilya Panchenko",
      avatar: photo1, 
      headline: "Frontend Developer",
    }
  },
  {
    id: 2,
    user: {
      name: "Posmitiuha Artem",
      avatar: photo2, 
      headline: "Frontend Developer",
      
    }
  },
  {
    id: 3,
    user: {
      name: "Pablo Escobar",
      avatar: photo3, 
      headline: "Frontend Developer",
      
    }
  },
   {
    id: 4,
    user: {
      name: "Ilon Mask",
      avatar: photo4, 
      headline: "Frontend Developer",
      
    }
  },
    {
    id: 5,
    user: {
      name: "Ylia Timoshenko",
      avatar: photo5, 
      headline: "Frontend Developer",
      
    }
  },
    {
    id: 6,
    user: {
      name: "Sasha Beliy",
      avatar: photo6, 
      headline: "Frontend Developer",
      
    }
  },
    {
    id: 7,
    user: {
      name: "Renat Koshkin",
      avatar: photo7, 
      headline: "Frontend Developer",
      
    }
  },
    {
    id: 8,
    user: {
      name: "Leonid Karachun",
      avatar: photo8, 
      headline: "Frontend Developer",
      
    }
  },
    {
    id: 9,
    user: {
      name: "Oleg Borvinok",
      avatar: photo9, 
      headline: "Frontend Developer",
      
    }
  },
     {
    id: 10,
    user: {
      name: "Iryna Topal",
      avatar: photo10, 
      headline: "Frontend Developer",
      
    }
  },
        {
    id: 11,
    user: {
      name: "Tasya Iordan",
      avatar: photo11, 
      headline: "Frontend Developer",
      
    }
  },

];


function MainChat(props) {
  const [selectedUser, setSelectedUser] = useState(usersData[0]);

 return (
  <div className='app-wrapper'>
    <HeaderMain logo={props.logo} search={search} userAvatar={userAvatar}/>
    <div className="messenger-container">
      <ChatList users={usersData} onSelect={setSelectedUser} activeId={selectedUser.id} />
      <ChatWindow user={selectedUser} />
      <UserProfileSidebar user={selectedUser} />
      
    </div>
  </div>
);
}

export default MainChat;