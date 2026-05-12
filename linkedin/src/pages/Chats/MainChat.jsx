import React, { useState } from 'react';
import ChatList from './components/ChatList';
import ChatWindow from './components/ChatWindow';
import UserProfileSidebar from './components/UserProfileSidebar';
import photo1 from './assets/img/norpфото.webp'
import photo2 from './assets/img/mystatphoto.webp'
import photo3 from './assets/img/IMG_20240816_191720_350.webp'
import photo4 from  './assets/img/1000146412.webp'
import photo5 from './assets/img/photo_5193170555778489933_y.webp'
import photo6 from  './assets/img/653353AD-6F93-4FB7-94D3-1366BDADE4EF.webp' 
import photo7 from  './assets/img/E7FD316D-7D79-493C-934C-FC7472849C01.webp'
import photo8 from  './assets/img/5339413118465466920.webp'
import photo9 from  './assets/img/20250315_210100.webp'
import photo10 from './assets/img/6F2EAF82-206A-4B47-B182-C10A5315146B.webp'
import photo11 from  './assets/img/E7D3F4D7-8926-4049-80A7-378BB04E8943.webp'
import Header from './components/Header';
import './App.css';

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
      name: "Alexander Istomin",
      avatar: photo2, 
      headline: "Fullstack Developer",
      
    }
  },
  {
    id: 3,
    user: {
      name: "Pablo Escobar",
      avatar: photo3, 
      headline: "Fullstack Developer",
      
    }
  },
   {
    id: 4,
    user: {
      name: "Ilon Mask",
      avatar: photo4, 
      headline: "Fullstack Developer",
      
    }
  },
    {
    id: 5,
    user: {
      name: "Ylia Timoshenko",
      avatar: photo5, 
      headline: "Fullstack Developer",
      
    }
  },
    {
    id: 6,
    user: {
      name: "Sasha Beliy",
      avatar: photo6, 
      headline: "Fullstack Developer",
      
    }
  },
    {
    id: 7,
    user: {
      name: "Renat Koshkin",
      avatar: photo7, 
      headline: "Fullstack Developer",
      
    }
  },
    {
    id: 8,
    user: {
      name: "Leonid Karachun",
      avatar: photo8, 
      headline: "Fullstack Developer",
      
    }
  },
    {
    id: 9,
    user: {
      name: "Oleg Borvinok",
      avatar: photo9, 
      headline: "Fullstack Developer",
      
    }
  },
     {
    id: 10,
    user: {
      name: "Irishka Chiki-Pici",
      avatar: photo10, 
      headline: "Fullstack Developer",
      
    }
  },
        {
    id: 11,
    user: {
      name: "Tasya Iordan",
      avatar: photo11, 
      headline: "Fullstack Developer",
      
    }
  },

];

function App() {
  const [selectedUser, setSelectedUser] = useState(usersData[0]);

 return (
  <div className='app-wrapper'>
    <Header />
    <div className="messenger-container">
      <ChatList users={usersData} onSelect={setSelectedUser} activeId={selectedUser.id} />
      <ChatWindow user={selectedUser} />
      <UserProfileSidebar user={selectedUser} />
    </div>
  </div>
);
}

export default App;