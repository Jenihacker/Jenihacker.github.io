import React from 'react'
import Typed from 'react-typed'
import image from '/assets/My project1.webp'
import { HashLink as Link } from "react-router-hash-link";
import Fade from 'react-reveal/Fade';

function Home() {

  return (
    <div className='home' id='home'>
      <div className="hero">
      <Fade top>
        <div className="details">
          <div className="details1">
            <h1>Hi There!</h1>
            <h1>I'm <span>Jenison Monteiro</span></h1>
            <h2>I'm a <span>
              <Typed
                strings={
                  [
                    " Web Developer",
                    " Full Stack Developer",
                    " Coding Enthusiast"
                  ]
                }
                typeSpeed={25}
                backSpeed={50}
                loop
              />
            </span></h2>
            <div className="abtbtn">
              <Link smooth style={{textDecoration:"none",color: "#fff"}} to="#about"><button>About Me</button></Link>
            </div>
            <div className="icons">
              <a href='https://github.com/Jenihacker/' target='__blank'><i class="fa-brands fa-github"></i></a>
              <a href='https://www.linkedin.com/in/jenison-monteiro-7715b0205/' target='__blank'><i class="fa-brands fa-linkedin"></i></a>
              <a href='https://twitter.com/jenisonmonteiro/' target='__blank'><i class="fa-brands fa-x-twitter"></i></a>
              <a href='https://www.facebook.com/jenison.monteiro.3/' target='__blank'><i class="fa-brands fa-facebook"></i></a>
              <a href='https://www.instagram.com/jenison__05/' target='__blank'><i class="fa-brands fa-instagram"></i></a>
            </div>
          </div>
        </div>
        </Fade>
        <Fade top>
        <div className="image">
          <img src={image} alt="image" draggable="false" />
        </div>
        </Fade>
      </div>
    </div>
    
  )
}

export default Home