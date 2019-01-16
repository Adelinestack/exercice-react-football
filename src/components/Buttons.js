import React from 'react';
import './Buttons.css';

function Buttons(props) {
  return (
    <div className="button-block">
      <button onClick={props.onGoalClick}>GOAL!</button>
      <button onClick={props.onYellowCardClick}>
        <span className="yellowcard">y</span>Yellow card
      </button>
      <button onClick={props.onRedCardClick}>
        <span className="redcard">y</span>Red card
      </button>
    </div>
  );
}

export default Buttons;
