import React from 'react';

import './about.css';

function About() {
    return (
        <div className="about-container">
            <div>
                <div className="logo-about">
                    <img src={require("../../assets/a.png")} alt="logo" className="name"/>
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
                    <p>React || Redux || Node || Rails || Less || JS || Ruby || HTML || CSS || Express</p><br/>
                    <h1>LET'S COLLABORATE</h1>
                    <p>I love collaborating with others! Say hi at <span style={{'color':'#3aa37b'}}>anubhavbhambri1@gmail.com</span> or reach out on social media.</p>
                </div>
            </div>
        </div>
    )
}

export default About;