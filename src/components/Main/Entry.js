import React, {useState} from "react";
import PropTypes from "prop-types";
import "./Entry.css"; // Create this CSS file for styling
import { Link, useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const Entry = (props) => {

  const steps = [
    "This will be of 15 minutes",
    "Do as much questions as possible",
    "The exam can't be paused",
    "You have to type your answer in the answer box",
    "Best of luck!",
  ];
  const { type } = useParams();

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
    <div className="entry-container">
      <div className="instructions-container">
        <h2 className="instructions-title">{type}</h2>
        <ol className="instructions-list">
          {steps.map((step, index) => (
            <li key={index} className="instructions-step">
              {step}
            </li>
          ))}
        </ol>
        <div className="d-flex justify-content-center">
          <Link to={`/exam/${type}`} className="btn btn-success">Start</Link>
        </div>
      </div>``
    </div>
    </div>
  );
};

// Entry.propTypes = {
//   title: PropTypes.string.isRequired,
//   steps: PropTypes.arrayOf(PropTypes.string).isRequired,
// };

export default Entry;
