import React from 'react'
import '/src/styles/App.css'

function Cards({image , text}) {
  
  return (
    <>
     <div className="card">
        <div className="card-info">  
            <img src= { image } alt="skill" width={ "48px" } height={ "48px" } draggable="false"/>
            <span>{ text }</span>
        </div>
    </div>
    </>
  )
}

export default Cards