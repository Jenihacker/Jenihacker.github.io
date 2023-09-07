import React from "react";
import "/src/styles/App.css";

function Cards({ image, text, url }) {
  return (
    <>
      <a href={url} target="_blank">
        <div className="card">
          <div className="card-info">
            <img
              src={image}
              alt="skill"
              width={"48px"}
              height={"48px"}
              draggable="false"
            />
            <span>{text}</span>
          </div>
        </div>
      </a>
    </>
  );
}

export default Cards;
