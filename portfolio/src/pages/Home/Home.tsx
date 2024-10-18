import Hero from "./sections/Hero/Hero";
import './Home.css';
import About from "./sections/About/About";
import Skills from "./sections/Skills/Skills";
import Contact from "./sections/Contact/Contact";
import Experience from "./sections/Experience/Experience";
import Projects from "./sections/Projects/Projects";
import NavBar from "../../components/NavBar/NavBar/NavBar";

const Home = () => {
    return (
        <>
            <div className="home-screen">
                <NavBar />
                <div className="section">
                    <Hero />
                </div>
                <div className="section">
                    <About />
                </div>
                <div className="section">
                    <Skills />
                </div>
                <div className="section">
                    <Projects />
                </div>
                <div className="section">
                    <Experience />
                </div>
                <div className="section">
                    <Contact />
                </div>
            </div>
        </>
    );
};

export default Home;
