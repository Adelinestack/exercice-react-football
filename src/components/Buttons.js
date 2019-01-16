import React from 'react';
import './Buttons.css';

export default function Buttons({
  onGoalClick,
  onYellowCardClick,
  onRedCardClick,
}) {
  return (
    <div className="button-block">
      <button onClick={onGoalClick}>GOAL!</button>
      <button onClick={onYellowCardClick}>
        <span className="yellowcard">y</span>Yellow card
      </button>
      <button onClick={onRedCardClick}>
        <span className="redcard">y</span>Red card
      </button>
    </div>
  );
}
