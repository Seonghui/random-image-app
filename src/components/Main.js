import React, { Component } from 'react';

class Main extends Component {
  state = {
    a: 0,
    b: 0,
    isToggleOn: true,
  }

  componentDidMount() {
    this.handleRandom();
  }

  handleRandom = () => {
    this.timer = setInterval(() => { 
      const min = 0;
      const max = 8;
      const ranValA = Math.floor(Math.random() * (max- min) + min);
      const ranValB = Math.floor(Math.random() * (max- min) + min);
      this.setState({
        a: ranValA,
        b: ranValB,
      })
    }, 10);
  }

  handleStop = () => {
    if (this.timer) clearInterval (this.timer);
    this.timer = null;
  }

  handleClick = () => {
    let { isToggleOn } = this.state;

    this.setState(function(prevState) {
			return {isToggleOn: !prevState.isToggleOn};
    });
    
    if(isToggleOn) {
      this.handleStop();
    } else {
      this.handleRandom();
    }
  }
  
  render() {
    let { a, b, isToggleOn } = this.state;
    let pathA = '/images/a/image-' + a + '.jpeg';
    let pathB = '/images/b/image-' + b + '.jpeg';

    return(
      <div>
        <div>
          <img src={pathA} alt="imageA" />
          <img src={pathB} alt="imageB" />
        </div>
        <button onClick={this.handleClick}>
          {isToggleOn ? 'STOP' : 'RESTART'}
        </button>
      </div>
    )
  }
}

export default Main;