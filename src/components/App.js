import React, { Component } from 'react';
import Team from './Team';
import Buttons from './Buttons';
import './App.css';

const DEFAULT_STATE = {
  score: [0, 0],
  yellowCard: [0, 0],
  redCard: [0, 0],
};

const teamA = 0;
const teamB = 1;

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = DEFAULT_STATE;
  }
  onButtonClick(team, element) {
    if (team === teamA) {
      this.setState({
        [element]: [this.state[element][teamA] + 1, this.state[element][teamB]],
      });
    } else {
      this.setState({
        [element]: [this.state[element][teamA], this.state[element][teamB] + 1],
      });
    }
  }

  onReset() {
    this.setState(DEFAULT_STATE);
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <Team id={0} teamName="Team A" data={this.state} />
          <div className="separation">:</div>
          <Team id={1} teamName="Team B" data={this.state} />
        </div>
        <div className="container">
          <Buttons
            onGoalClick={this.onButtonClick.bind(this, 0, 'score')}
            onYellowCardClick={this.onButtonClick.bind(this, 0, 'yellowCard')}
            onRedCardClick={this.onButtonClick.bind(this, 0, 'redCard')}
          />
          <Buttons
            onGoalClick={this.onButtonClick.bind(this, 1, 'score')}
            onYellowCardClick={this.onButtonClick.bind(this, 1, 'yellowCard')}
            onRedCardClick={this.onButtonClick.bind(this, 1, 'redCard')}
          />
        </div>
        <div className="container">
          <button className="reset" onClick={this.onReset.bind(this)}>
            Reset
          </button>
        </div>
      </div>
    );
  }
}
