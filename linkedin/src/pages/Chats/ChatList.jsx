import React from 'react';
import './ChatList.css'
import myPhoto from '../assets/img/norpфото.webp';

const ChatList = ({ users, onSelect, activeId }) => {
  return (
    <aside className="sidebar-left">
      <div className="search-box">
        <input type="text" placeholder="Search" />
        <i></i>
      </div>
      <div className="chat-items">
        {users.map((item) => (
          <div 
            key={item.id} 
            className={`chat-card ${item.id === activeId ? 'active' : ''}`}
            onClick={() => onSelect(item)}
          >
            <div className="avatar-placeholder chat-avatar-size">
              <div className="avatar-placeholder chat-avatar-size">
                <img 
                  src={item.user.avatar} 
                  alt={item.user.name} 
                  className="chat-img" 
                />
              </div>
            </div>
            
            <div className="text-content">
              <h4>{item.user.name}</h4>
              <p>{item.user.headline}</p>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default ChatList;