import React from 'react';
import './ChatWindow.css';

const ChatWindow = ({ user }) => {
  if (!user) return <div className="chat-main">Выберите чат</div>;

  return (
    <main className="chat-main">
      <header className="chat-header">
        <div className="header-info">
          <img src={user.user.avatar} alt={user.user.name} className="header-avatar" />
          <div className="header-text">
            <h3>{user.user.name}</h3>
            <span className="status-online">Active Now</span>
          </div>
        </div>
      </header>

      <div className="messages-flow">
        <div className="message-container incoming">
          <img src={user.user.avatar} alt={user.user.name} className="message-avatar" />
          <div className="bubble">Привет, я {user.user.name}!</div>
         
        </div>
        <br></br>
        <div className="message-container outgoing">
          <div className="bubble">Привет! Как дела?</div>
        </div>
      </div>
      <div className="chat-input-container">
    <div className="input-wrapper">
      <input type="text" placeholder="Write something..." />
      <div className="input-actions">
        <button className="icon-btn"><svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="36" height="36" rx="8" fill="#A29BFE"/>
<path d="M18 28C23.5228 28 28 23.5228 28 18C28 12.4772 23.5228 8 18 8C12.4772 8 8 12.4772 8 18C8 23.5228 12.4772 28 18 28Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 20C14 20 15.5 22 18 22C20.5 22 22 20 22 20" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 15H15.01" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21 15H21.01" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</button>
        <button className="icon-btn"><svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="36" height="36" rx="8" fill="#A29BFE"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M21.7085 14.2818C22.0016 14.5745 22.0019 15.0493 21.7092 15.3424L15.353 21.7081C15.0603 22.0012 14.5854 22.0015 14.2923 21.7088C13.9992 21.4162 13.9989 20.9413 14.2915 20.6482L20.6478 14.2826C20.9405 13.9895 21.4153 13.9891 21.7085 14.2818Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.7577 15.8759C14.0506 16.1688 14.0506 16.6437 13.7577 16.9366L11.1046 19.5897C10.4011 20.2932 10.0059 21.2473 10.0059 22.2422C10.0059 23.2371 10.4011 24.1912 11.1046 24.8947C11.808 25.5982 12.7622 25.9934 13.757 25.9934C14.2496 25.9934 14.7374 25.8963 15.1925 25.7078C15.6477 25.5193 16.0612 25.243 16.4095 24.8947L19.0626 22.2415C19.3555 21.9487 19.8304 21.9487 20.1233 22.2415C20.4162 22.5344 20.4162 23.0093 20.1233 23.3022L17.4702 25.9553C16.9826 26.4429 16.4037 26.8297 15.7666 27.0936C15.1295 27.3575 14.4466 27.4934 13.757 27.4934C12.3643 27.4934 11.0287 26.9401 10.0439 25.9553C9.05911 24.9705 8.50586 23.6349 8.50586 22.2422C8.50586 20.8495 9.05911 19.5138 10.0439 18.529L12.697 15.8759C12.9899 15.583 13.4648 15.583 13.7577 15.8759Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.529 10.0449C19.5138 9.06008 20.8495 8.50684 22.2422 8.50684C23.6349 8.50684 24.9705 9.06008 25.9553 10.0449C26.9401 11.0297 27.4934 12.3653 27.4934 13.758C27.4934 15.1507 26.9401 16.4864 25.9553 17.4712L23.3022 20.1243C23.0093 20.4172 22.5344 20.4172 22.2415 20.1243C21.9487 19.8314 21.9487 19.3565 22.2415 19.0636L24.8947 16.4105C25.5982 15.707 25.9934 14.7529 25.9934 13.758C25.9934 12.7631 25.5982 11.809 24.8947 11.1055C24.1912 10.402 23.2371 10.0068 22.2422 10.0068C21.2473 10.0068 20.2932 10.402 19.5897 11.1055L16.9366 13.7587C16.6437 14.0515 16.1688 14.0515 15.8759 13.7587C15.583 13.4658 15.583 12.9909 15.8759 12.698L18.529 10.0449Z" fill="white"/>
</svg>
</button>
      </div>
    </div>
  </div>
    </main>
  );
};

export default ChatWindow;