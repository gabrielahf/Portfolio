import React from 'react';
import './Contact.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="contact">
            <div className="contact-container">
                <div className="connect">
                    <h2>Connect with me:</h2>
                    <p>Satisfied with me? Let's get in touch</p>
                    <div className="social-icons">
                        <a href="https://www.linkedin.com/in/gabrielaroxo/" target="_blank" rel="noreferrer">
                            <LinkedInIcon fontSize="large" style={{ opacity: 0.4, color: 'white' }} />
                        </a>
                        <a href="https://github.com/gabrielahf" target="_blank" rel="noreferrer">
                            <GitHubIcon fontSize="large" style={{ opacity: 0.4, color: 'white' }} />
                        </a>
                        <a href="mailto:gabrielahroxo@gmail.com">
                            <EmailIcon fontSize="large" style={{ opacity: 0.4, color: 'white' }} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
