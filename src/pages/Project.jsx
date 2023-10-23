import React from 'react'
import Pcards from '/src/components/Pcards'
import Carousel from 'react-elastic-carousel'
import { projects } from '/src/data/projects'
import Zoom from 'react-reveal/Zoom';
import { Element } from 'react-scroll';

function Project() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 600, itemsToShow: 2 },
    { width: 1024, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
  ];
  
  return (
    <Element className='project' id='project' style={{ backgroundColor: "rgba(0,0,0,0.3)" }}>
        <Zoom>
        <h1>Projects</h1>
        <Carousel breakPoints={breakPoints} >
        { projects.map((elem) => (
            <Pcards key={elem.id} image = {elem.image} title = {elem.title} details={elem.details} url={elem.url}/>
            ))}
        </Carousel>
        </Zoom>
    </Element>
  )
}

export default Project