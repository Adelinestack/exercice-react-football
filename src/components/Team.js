import React from 'react';
import './Team.css';

export default function Team({
  id,
  teamName,
  data: { score, yellowCard, redCard },
}) {
  return (
    <div className="team-block">
      <p>{teamName}</p>
      <div className="score">{score[id]}</div>
      <div>
        <img
          src="https://image.flaticon.com/icons/svg/1165/1165269.svg"
          width="30px"
        />
        {yellowCard[id]}
      </div>
      <div>
        <img
          src="https://image.flaticon.com/icons/svg/451/451718.svg"
          width="30px"
        />
        {redCard[id]}
      </div>
    </div>
  );
}
