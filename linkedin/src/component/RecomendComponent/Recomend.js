import React, { useState } from 'react';
import './Recomend.css';
import saraphoto from '../../assets/E7D3F4D7-8926-4049-80A7-378BB04E8943.webp';
const recommendations = [
  {
    id: 1,
    name: "Sarah Jones",
    role: "Visual Designer at Bright Horizons Design Studio",
    avatar: saraphoto,
    text: [
      "I had the pleasure of working with Sarah J. on a complex product redesign project...",
      "What sets Sarah apart is her meticulous attention to detail...",
      "Sarah is also an exceptional team player...",
      "I highly recommend Sarah to any organization..."
    ]
  },
  {
    id: 2,
    name: "Mark Owens",
    role: "Interaction Designer at NextWave Interfaces",
    avatar: saraphoto,
    text: [
      "Working with Mark R. was an incredible experience...",
      "Mark's strength lies in his ability to think holistically...",
      "Beyond his technical expertise, Mark is a fantastic collaborator...",
      "I wholeheartedly recommend Mark to any team..."
    ]
  }
];

const Recommendations = () => {
  const [activeTab, setActiveTab] = useState('Given');

  return (
    <div className="recommendations-container">
      <h2 className="recommendations-title">Recommendations</h2>

      <div className="rec-tabs-wrapper">
        {['Received', 'Given'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`rec-tab-btn ${activeTab === tab ? 'active' : ''}`}
          >
            {tab}
            {activeTab === tab && <div className="rec-tab-active-line" />}
          </button>
        ))}
      </div>

      <div className="rec-list">
        {recommendations.map((rec, index) => (
          <React.Fragment key={rec.id}>
            <div className="rec-item">
              <img 
                src={rec.avatar} 
                alt={rec.name} 
                className="rec-avatar"
              />

              <div className="rec-content">
                <h3 className="rec-author-name">{rec.name}</h3>
                <p className="rec-author-role">{rec.role}</p>
                
                <div className="rec-text-body">
                  {rec.text.map((paragraph, i) => (
                    <p key={i} className="rec-text-paragraph">{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
            
            {index !== recommendations.length - 1 && <hr className="rec-divider" />}
          </React.Fragment>
        ))}
      </div>

      <div className="rec-more-wrapper">
        <button className="rec-more-btn">More</button>
      </div>
    </div>
  );
};

export default Recommendations;