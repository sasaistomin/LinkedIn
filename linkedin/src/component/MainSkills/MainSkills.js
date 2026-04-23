import React, { useState } from 'react';
import './MainSkills.css';
import boston from '../../assets/boston.png';
import CreoLab from '../../assets/CreoLab.jpg';
import Gears from '../../assets/Gears.jpg';
import Up from '../../assets/up.png';


const MainSkills = () => {
    const [openSections, setOpenSections] = useState({
        prototyping: true,
        ux: true,
        wireframing: true,
    });

    const toggleSection = (section) => {
        setOpenSections({
            ...openSections,
            [section]: !openSections[section],
        });
    };

    const skillsData = [
        {
            title: 'Prototyping',
            key: 'prototyping',
            items: [
                {
                    img: boston,
                    text: 'UI/UX Designer (Freelance)',
                },
                {
                    img: Gears,
                    text: 'Web Designer',
                },
                {
                    img: CreoLab,
                    text: 'UI/UX Designer',
                },
            ],
        },
        {
            title: 'User Experience (UX)',
            key: 'ux',
            items: [
                {
                    img: Gears,
                    text: 'CreoLab Design',
                },
                {
                    img: Gears,
                    text: 'Cybergenia Academy',
                },
                {
                    img: boston,
                    text: 'UI/UX Design',
                },
            ],
        },
        {
            title: 'Wireframing',
            key: 'wireframing',
            items: [
                {
                    img: boston,
                    text: 'UI/UX Designer',
                },
                {
                    img: CreoLab,
                    text: 'CreoLab Design',
                },
                {
                    img: CreoLab,
                    text: 'Cybergenia Academy',
                },
            ],
        },
    ];

    return (
        <div className="main-skills-container">
            <div className="main-skills-card">
                <div className="main-skills-header">
                    <h2>Main Skills</h2>
                    <button className="close-btn">×</button>
                </div>

                {skillsData.map((section) => (
                    <div key={section.key} className="skills-section">
                        <div
                            className="skills-section-header"
                            onClick={() => toggleSection(section.key)}
                        >
                            <h3>{section.title}</h3>
                            <span className="arrow">
                                {openSections[section.key] ? '⌃' : '⌄'}
                            </span>
                        </div>

                        {openSections[section.key] && (
                            <ul className="skills-list">
                                {section.items.map((item, index) => (
                                    <li key={index} className="skills-item">
                                        <img src={item.img} alt="" className="skills-avatar" />
                                        <span>{item.text}</span>
                                    </li>
                                ))}
                            </ul>
                        )}

                        <hr />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MainSkills;