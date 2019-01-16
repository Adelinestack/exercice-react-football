import React from 'react';
import './Team.css';

function Team(props) {
  return (
    <div className="team-block">
      <p>{props.teamName}</p>
      <div className="score">{props.score}</div>
      <div>
        <img
          src="https://image.flaticon.com/icons/svg/1165/1165269.svg"
          width="30px"
        />
        {props.yellowCard}
      </div>
      <div>
        <img
          src="https://image.flaticon.com/icons/svg/451/451718.svg"
          width="30px"
        />
        {props.redCard}
      </div>
    </div>
  );
}

export default Team;
