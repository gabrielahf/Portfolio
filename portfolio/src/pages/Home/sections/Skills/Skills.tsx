
import React from 'react';
import './Skills.css';
import c_linguagem from '../../../../assets/c.svg';
import Cmais from '../../../../assets/c++.svg';
import css from '../../../../assets/css.svg';
import git from '../../../../assets/git.svg';
import github from '../../../../assets/github.svg';
import html from '../../../../assets/html.svg';
import java from '../../../../assets/java.svg';
import javascript from '../../../../assets/javascript.svg';
import linux from '../../../../assets/linux.svg';
import react from '../../../../assets/react.svg';
import typescript from '../../../../assets/typescript.svg';
import vscode from '../../../../assets/vscode.svg';




const Skills = () => {
    return (
        <section id="skills" className="skills">
            <h2 className="skills-title">my tech stack</h2>
            <p className="skills-text">
                Technologies I’ve been working with recently
            </p>
            <div className="icons">
                <img src={javascript} alt="JavaScript" className="icon" />
                <img src={typescript} alt="TypeScript" className="icon" />
                <img src={react} alt="React" className="icon" />
                <img src={java} alt="Java" className="icon" />
                <img src={c_linguagem} alt="C Language" className="icon" />
                <img src={Cmais} alt="C++" className="icon" />
                <img src={vscode} alt="VS Code" className="icon" />
                <img src={linux} alt="Linux" className="icon" />
                <img src={html} alt="HTML" className="icon" />
                <img src={css} alt="CSS" className="icon" />
                <img src={github} alt="GitHub" className="icon" />
                <img src={git} alt="Git" className="icon" />
            </div>
        </section>
    );
};

export default Skills;
