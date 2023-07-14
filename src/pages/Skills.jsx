import React from 'react'
import Cards from '/src/components/Cards'
import { skills } from '/src/data/skills'
import Fade from 'react-reveal/Fade';

function Skills() {
  return (
    <div className='Skills' id='skills'>
      <Fade top> 
      <h1>Skills & Experience</h1>
      </Fade>
      <div className="container">
        <div className="content"> 
          <div className="row">
          { skills.map((elem) => (
            <Fade bottom>
            <Cards key={elem.id} image = {elem.image} text = {elem.text} />
            </Fade>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills