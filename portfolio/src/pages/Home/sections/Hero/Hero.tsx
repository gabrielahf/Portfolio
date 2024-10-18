import React from "react";
import './Hero.css';
import Curriculo from '../../../../assets/GabrielaHoffmannRoxo.pdf';
import Avatar from '../../../../assets/foto_perfil.svg';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import DownloadIcon from '@mui/icons-material/Download';
import { Button } from '@mui/material';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>Hi 👋,</h1>
                <h2>My name is </h2>
                <h2><span className="name-gradient">Gabriela Roxo</span></h2>
                <p>Software Engineering Student</p>
                <div className="buttons">
                    <a href="https://www.linkedin.com/in/gabrielaroxo/" className="icon-button">
                        <LinkedInIcon fontSize="large" style={{ opacity: 0.4, color: 'white' }} />
                    </a>
                    <a href="https://github.com/gabrielahf" className="icon-button">
                        <GitHubIcon fontSize="large" style={{ opacity: 0.4, color: 'white' }} />
                    </a>

                    <a href={Curriculo} download="GabrielaHoffmannRoxo.pdf" style={{ textDecoration: 'none' }}>
                        <Button
                            variant="contained"
                            className="cv-button"
                            startIcon={<DownloadIcon />}
                        >
                            Download CV
                        </Button>
                    </a>
                </div>
            </div>
            <div className="hero-image">
                <img src={Avatar} alt="Gabriela Roxo" />
            </div>
        </section>
    );
};

export default Hero;
