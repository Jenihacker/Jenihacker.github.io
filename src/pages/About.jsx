import React from 'react'
import image from '/assets/Jenison.webp'
import Fade from 'react-reveal/Fade';

function About() {
  return (
    <div className='about' id='about' >
      <Fade left>
      <h1>About Me</h1>
      </Fade>
      <div className="aboutdet">
        <Fade left>  
        <div className="abtimg">
            <img src={ image } alt="image" draggable="false" />
        </div>
        </Fade>
        <Fade left>
        <div className="abtsec">
          <p>Hello, my name is Jenison Monteiro and I'm a Web Developer from Mangalore. I've been fascinated with computers and the internet since I was a kid, and I've always loved building things with code. I love to work with computers and also explore new things.When I'm not coding, I love to indulge in my hobby of photo and video editing.</p>
          <br />
          <p>I believe that being a web developer is more than just a job – it's a lifestyle. I'm constantly seeking out new challenges and opportunities to improve my skills.</p>
        </div>
        </Fade>
      </div>
    </div>
  )
}

export default About