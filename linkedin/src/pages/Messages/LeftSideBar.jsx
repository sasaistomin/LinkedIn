import React from 'react';
import './LeftSideBar.css';
import userAvatar from '../../assets/777.png'; 

const LeftSideBar = () => {
    return (
        <aside className="left-sidebar">
            <div className="profile-card">
                {/* Верхний баннер */}
                <div className="profile-header-bg"></div>
                
                <div className="profile-body">
                    {/* Аватар с белой обводкой */}
                    <img src={userAvatar} alt="Avatar" className="sidebar-avatar" />
                    
                    <div className="profile-info">
                        <h3>Nathaniel Evans</h3>
                        <p>Junior UI/UX Designer • Microsoft</p>
                    </div>

                    {/* Тонкая линия-разделитель */}
                    <div className="divider"></div>

                    <div className="profile-footer">
                        <button className="add-experience-btn">+ Work experience</button>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default LeftSideBar;