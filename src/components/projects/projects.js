import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

import './projects.css';

function Projects() {
    return (
        <div className="about-container">
        <div className="side-nav-about">
                {/* <div className="logo-about">
                    <a href="/"><img src={require("../../assets/a.png")} alt="logo" className="name"/></a>
                </div> */}
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
        <div className="projects-page-container">
            <div className="projects-heading-container">
                <div className="projects-page-heading">
                    <h1>Here are some web apps I've created</h1>
                </div>
                <div className="projects">
                    <div class="project-container">
                        <div class="project">
                            <a href="https://clone-coding-client.herokuapp.com/" target="_blank">
                                <img src={require("../../assets/roadtrip.png")} alt=""/>
                            </a>
                        </div>
                        <div class="project-text">
                            <div class="title-line"></div>
                            <p>Front-end with React, Google Maps and Back-end with Django</p>  
                            <h2>Roadtrip 
                                <a href="https://github.com/lambda-mud" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon className="fab fa-github fa-1x" icon={faGithub} size="1x" />
                                </a>
                            </h2>
                        </div>
                    </div>

                    <div class="project-container">
                        <div class="project">
                            <a href="https://clone-coding-client.herokuapp.com/" target="_blank">
                                <img src={require("../../assets/challengejs.png")} alt=""/>
                            </a>
                        </div>
                        <div class="project-text">
                            <div class="title-line"></div>
                            <p>Front-end with React, CodeMirror, WebWorkers and Back-end with Node.js and Express</p>  
                            <h2>ChallengeJS 
                                <a href="https://github.com/labs13-clone" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon className="fab fa-github fa-1x" icon={faGithub} size="1x" />
                                </a>
                            </h2>
                        </div>
                    </div>
                        
                    <div class="project-container">
                        <div class="project">
                            <a href="https://angry-blackwell-b2e2df.netlify.com/" target="_blank">
                                <img src={require("../../assets//winplaceshow.png")} alt=""/>
                            </a>
                        </div>
                        <div class="project-text">
                            <div class="title-line"></div>
                            <p>Front-end with React and Redux</p>  
                            <h2>Win-Place-Show 
                                <a href="https://github.com/winplaceshow" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon className="fab fa-github fa-1x" icon={faGithub} size="1x" />
                                </a>
                            </h2>
                        </div>
                    </div>
                
                    <div class="project-container">
                        <div class="project">
                            <a href="https://festive-archimedes-df717a.netlify.com/" target="_blank">
                                <img src={require("../../assets//insta_clone.png")} alt=""/>
                            </a>
                        </div>
                        <div class="project-text">
                            <div class="title-line"></div>
                            <p>Front-end with React.js</p>  
                            <h2>Instagram Clone 
                                <a href="https://github.com/Anubhav311/React-Insta-Clone" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon className="fab fa-github fa-1x" icon={faGithub} size="1x" />
                                </a>
                            </h2>
                        </div>
                    </div>

                    <div class="project-container">
                        <div class="project">
                            <a href="https://objective-goldstine-40c059.netlify.com/" target="_blank">
                                <img src={require("../../assets/todo-list.png")} alt=""/>
                            </a>
                        </div>
                        <div class="project-text">
                            <div class="title-line"></div>
                            <p>Todo-list with React.js</p>        
                            <h2>My Todo List                         
                                <a href="https://github.com/Anubhav311/Redux-Todo" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon className="fab fa-github fa-1x" icon={faGithub} size="1x" />
                                </a>
                            </h2>
                        </div>
                    </div>     
                    <div class="project-container">
                        <div class="project">
                            <a href="https://donor-management-landing-page.netlify.com/" target="_blank">
                                <img src={require("../../assets/donor_management.png")} alt=""/>
                            </a>
                        </div>
                        <div class="project-text">
                            <div class="title-line"></div>
                            <p>Landing Page with HTML, LESS and vanilla JS</p>        
                            <h2>Donor Management
                                <a href="https://github.com/donor-management" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon className="fab fa-github fa-1x" icon={faGithub} size="1x" />
                                </a>
                            </h2>
                        </div>
                    </div>
                <h1 className="bottom-nav-projects"><Link to='/about' className="bottom-nav-projects-link">ANUBHAV WHO?</Link></h1>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Projects;