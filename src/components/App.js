import React, { Component } from 'react';
import Team from './Team';
import Buttons from './Buttons';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      score: [0, 0],
      yellowCard: [0, 0],
      redCard: [0, 0],
    };
  }
  onButtonClick(team, element) {
    if (team === 0) {
      this.setState({
        [element]: [this.state[element][0] + 1, this.state[element][1]],
      });
    } else {
      this.setState({
        [element]: [this.state[element][0], this.state[element][1] + 1],
      });
    }
  }

  onReset() {
    this.setState({
      score: [0, 0],
      yellowCard: [0, 0],
      redCard: [0, 0],
    });
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <Team
            teamName={'Team A'}
            score={this.state.score[0]}
            yellowCard={this.state.yellowCard[0]}
            redCard={this.state.redCard[0]}
          />
          <div className="separation">:</div>
          <Team
            teamName={'Team B'}
            score={this.state.score[1]}
            yellowCard={this.state.yellowCard[1]}
            redCard={this.state.redCard[1]}
          />
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

export default App;
