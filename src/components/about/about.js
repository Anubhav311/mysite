import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

import './about.css';

function About() {
    return (
        <div className="about-container">
            <div className="side-nav-about">
                {/* <div className="logo-about"> */}
                    {/* <a href="/"><img src={require("../../assets/a.png")} alt="logo" className="name"/></a> */}
                {/* </div> */}
                <div className="about-nav">
                    <div className="social-icons-about-side-nave">
                        <a href="https://twitter.com/anubhav_bhambri" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className="fab" icon={faTwitter} size="2x" />
                        </a>
                        <a href="https://www.linkedin.com/in/anubhav-bhambri/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className="fab" icon={faLinkedinIn} size="2x" />
                        </a>
                        <a href="https://github.com/Anubhav311" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className="fab" icon={faGithub} size="2x" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="heading-content-container">
                <div data-aos="fade-up" className="heading">
                    <h1 className="heading-text">WELCOME<br/>TO MY SITE</h1>
                </div>
                <div className="content">
                    <p>I'm Anubhav, a corporate law professional turned full-stack web developer and a huge fan of MCU superhero Iron Man.</p><br/><br/>
                    <h1>EXPERIENCE</h1>
                    <p>During my three years experience in legal industry, I've learned how to prevent problems. But if you cannot prevent one, I've learned how to find the solution for it.<br/><br/>I've realized that software industry and legal industry have a lot of similarities. Both industries are complex and almost everything is time-bound with huge penalties.</p><br/><br/>
                    <h1>TECH-STACK</h1>
                    <p>HTML || CSS || Less || JS || Python || React || Redux || Node || Express || Django || Git</p><br/>
                    <h1>LET'S COLLABORATE</h1>
                    <p>I love collaborating with others! Say hi at <span style={{'color':'#3aa37b'}}>anubhavbhambri1@gmail.com</span> or reach out on social media.</p>
                </div>
                <div className="bottom-nav-about-container">
                <h1 className="bottom-nav-about"><Link to='/projects' className="bottom-nav-about-link">MY WORK</Link></h1>
                </div>
            </div>
        </div>
    )
}

export default About;