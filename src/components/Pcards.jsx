import React from 'react'
import '/src/styles/card.css'

function Pcards({ image, title, details }) {
  return (
    <div className='pcards'>
      <div className="container">
        <div className="card" id="pcard">
          <div className="face face1">
            <div className="content">
              <span className="stars" />
              <h2 className="det">{title}</h2>
              <p className="det">
                {details}
              </p>
            </div>
          </div>
          <div className="face face2" style={{backgroundImage:`url(${image})`,backgroundSize:'300px 400px',backgroundRepeat:'no-repeat'}}>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pcards