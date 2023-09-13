import React from "react";
import '../App.css'

const Card = (props) => {
  return (
    <div>
      <div className="card border-success mb-3">
        <div className="card-header bg-success text-white">{props.heading} </div>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
