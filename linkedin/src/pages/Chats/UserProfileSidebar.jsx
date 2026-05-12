import React from 'react';
import './UserProfileSidebar.css';

const UserProfileSidebar = ({ user }) => {
  const profile = user?.user || {};

  return (
    <aside className="sidebar-right">
      <div className="profile-header">
        <img src={profile.avatar} alt={profile.name} className="large-pic" />
        <h2 className="profile-name">{profile.name}</h2>
      </div>

      <div className="info-sections">
        <div className="info-block">
          <label>Phone Number</label>
          <p>{profile.phone || '+380 95 6848 943'}</p>
        </div>

        <div className="info-block">
          <label>Email Address</label>
          <p>{profile.email || 'itstep@gmail.com'}</p>
        </div>

        <div className="info-block">
          <label>Current Position</label>
          <p>
            <strong>{profile.position || 'Junior progammer'}</strong> • {profile.company || 'It Step'}
            <br />
            <span className="sub-text">2024 - now (2 years)</span>
          </p>
        </div>

        <div className="info-block">
          <label>Education</label>
          <p>{profile.education || 'IT Step College'}</p>
        </div>

        <div className="info-block">
          <label>Birth Date</label>
          <p>{profile.birthDate || '21 June, 2008'}</p>
        </div>

        <div className="info-block">
          <label>Website</label>
          <p className="link">{profile.website || 'www.itstep.org'}</p>
        </div>
      </div>
    </aside>
  );
};

export default UserProfileSidebar;