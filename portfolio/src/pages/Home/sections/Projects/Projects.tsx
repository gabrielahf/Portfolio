import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './Projects.css';
import { EffectCoverflow, Pagination } from 'swiper/modules';

import Calculadora from '../../../../assets/calculator.png';
import Conversor from '../../../../assets/conversor_moeda.png';

const Projects: React.FC = () => {
    const projects = [
        {
            image: Calculadora,
            title: 'Calculadora',
            link: 'https://github.com/gabrielahf/Calculadora',
        },
        {
            image: Conversor,
            title: 'Conversor de Moedas',
            link: 'https://github.com/gabrielahf/Conversor_Moedas',
        },
        {
            image: 'Foto1',
            title: 'Portfolio',
            link: '#',
        },
    ];

    return (
        <section id="projects" className="projects">
            <h1 className="project-title">projects</h1>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                {projects.map((project, index) => (
                    <SwiperSlide key={index}>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                            <div className="slide-content">
                                <img src={project.image} alt={project.title} className="project-image" />
                                <h3 className="project-card-title">{project.title}</h3>
                            </div>
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Projects;
