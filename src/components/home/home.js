import React from "react";
import { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
// import {library, dom } from '@fortawesome/fontawesome-svg-core';
// import {fas, faStar, faTrophy, faThumbsUp, faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons';
// import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import './home.css';


function Home() {
  const [typeWriter, setTypeWriter] = useState({
    textState: '',
    isDeleting: false,
    wordIndex: 0,
    typeSpeed: 50,
  })
  
  const textArray = 
    [
      "Law professional turned web developer", 
      "Iron Man fan boy", 
      "Wannabe table tennis player"
    ]  
    
  //current index of word
  const current = typeWriter.wordIndex % textArray.length
        
  // If word is complete
  if(!typeWriter.isDeleting && typeWriter.textState === textArray[current]) {
    setTypeWriter({
      ...typeWriter,
      isDeleting: true,
      typeSpeed: 2000,
    });
  } else if(typeWriter.isDeleting && typeWriter.textState === '') {
    setTypeWriter({
      ...typeWriter,
      isDeleting: false,
      wordIndex: typeWriter.wordIndex + 1,
      typeSpeed: 500,
    })
  }
  
  useInterval(() => {
    // Your custom logic here
    if (typeWriter.isDeleting) {
      setTypeWriter({
        ...typeWriter,
        textState: textArray[current].substring(0, typeWriter.textState.length - 1),
        typeSpeed: 50,
      })
    } else {
      setTypeWriter({
        ...typeWriter,
        textState: textArray[current].substring(0, typeWriter.textState.length + 1),
        typeSpeed: 50,
      })
    }
  }, typeWriter.isDeleting ? typeWriter.typeSpeed / 2 : typeWriter.typeSpeed);

  return (
    <div className="App">
        <div className="navbar">
          <div className="logo">
            <img src={require("../../assets/a.png")} alt="logo" className="name"/>
          </div>
          <div className="social-icons">
            <a href="https://twitter.com/anubhav_bhambri" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter fa-2x"></i>
            </a>
            <a href="https://www.linkedin.com/in/anubhav-bhambri/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in fa-2x"></i>
            </a>
            <a href="https://github.com/Anubhav311" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github fa-2x"></i>
            </a>
          </div>
        </div>
        <div className="heading-subheading-container">
          <div className="main-text-container">
            <div className="underline">
              <div className="root-main-text">
                <h1 className="hola">Hola!</h1>
                <h1 className="anubhav">I'm <br/>Anubhav</h1>
              </div>
            </div>
          </div>
          <div className="subheading">{typeWriter.textState}</div>
        </div>
        <div className="bottom-menu">
          <div className="who"><Link to='/about' className="who-link">Anubhav Who?</Link></div>
          <div className="projects"><Link to='/projects' className="projects-link">My Projects</Link></div>
        </div>
    </div>
  );
}

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest function.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}





export default Home;
