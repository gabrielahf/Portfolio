import React from 'react';
import './About.css';
import { Button } from '@mui/material';
import Curriculo from '../../../../assets/GabrielaHoffmannRoxo.pdf';

const About = () => {
    return (
        <section id="about" className="about">
            <h2 className="about-title">about</h2>
            <p className="about-text">
                I am a Software Engineering student at PUCRS, currently in my third semester. I have a solid technical foundation in object-oriented programming, with experience in C++ and Java. Additionally, I have worked in customer relationship management through multichannel services, contributing to process optimization and improving team productivity. Recently, I’ve been involved in design projects using Figma and frontend development, which sparked my interest in this field and motivated me to deepen my knowledge. At the same time, I have also been exploring Artificial Intelligence, a topic I’ve been studying with great interest. I am open to opportunities that will enrich my knowledge and help me better define the path I want to follow.
            </p>
            <a href={Curriculo} download="GabrielaHoffmannRoxo.pdf" style={{ textDecoration: 'none' }}>
                <Button
                    variant="contained"
                    className="more-about-me"
                >
                    MORE ABOUT ME
                </Button>
            </a>
        </section>
    );
};

export default About;
