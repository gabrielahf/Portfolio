import React from 'react';
import './Experience.css';

const Experience = () => {
    return (
        <section id="experience" className="experience">
            <h1 className="experience-title">Experience</h1>

            <div className="experience-container">
                <div className="professional">
                    <h2 className="experience-subtitle">Professional Area</h2>
                    <p className="experience-period">2023 · Present</p>

                    <div className="experience-card">
                        <h3>Study Group</h3>
                        <p>
                            Partnership with the
                            <a href="https://www.ages.pucrs.br/" target="_blank" rel="noreferrer" className='link'>
                                Experimental Software Agency
                            </a>
                            and the company
                            <a href="https://creatusdev.com/" target="_blank" rel="noreferrer" className='link'>
                                Creatus
                            </a>
                        </p>
                        <div className="experience-info">
                            <span>4 months</span>
                            <span>August/2024 · November/2024</span>
                        </div>
                    </div>

                    <div className="experience-card">
                        <h3>Internship - ABLE</h3>
                        <p>I assisted in managing service queues and customer relations through multiple channels, contributed to process improvements to enhance team productivity, updated databases, produced mailings, carried out commercial prospecting, and participated in conducting national and international market and satisfaction surveys.</p>
                        <div className="experience-info">
                            <span>6 months</span>
                            <span>February/2024 · July/2024</span>
                        </div>
                    </div>

                    <div className="experience-card">
                        <h3>Internship - LABCIM</h3>
                        <p>I provided support in the maintenance of machines and equipment in the lab, applying ACL knowledge in the Robosoft software, and assisting with tasks related to courses that use the lab.</p>
                        <div className="experience-info">
                            <span>7 months</span>
                            <span>August/2023 · February/2024</span>
                        </div>
                    </div>

                </div>

                <div className="academic">
                    <h2 className="experience-subtitle">Academic</h2>
                    <p className="experience-period">2021 · Present</p>

                    <div className="experience-card">
                        <h3>Bachelor's in Software Engineering</h3>
                        <p>Currently in the 3rd semester.</p>
                        <div className="experience-info">
                            <span>3 months</span>
                            <span>January/2021 · April/2021</span>
                        </div>
                    </div>

                    <div className="experience-card">
                        <h3>High School Diploma</h3>
                        <p>I graduated from high school at Colégio Monteiro Lobato</p>
                        <div className="experience-info">
                            <span>December/2021</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
