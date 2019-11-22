import React, { Component } from 'react';
import './style/styles.css'
import './App.css';
import Hasil from './event/hasil';
import Tombol from './event/tombol';

class App extends Component {
  state = {
    result: ''
  };
  buttonPressed = buttonName => {
    if (buttonName === "=") {
      this.calculate();
    } else if (buttonName === "C") {
      this.reset();
    } else
      this.setState({
        result: this.state.result + buttonName
      });
  };

  reset = () => {
    this.setState({
      results: ''
    });
  };

  calculate = () => {
    try {
      this.setState({
        result: eval(this.state.result)
      });
    } catch (e) {
      this.setState({
        result: "error"
      })
    }
  };

  render() {
    return (
      <div className="wrapper">
        <Hasil results={this.state.result} />
        <Tombol buttonPressed={this.buttonPressed} />
      </div>
    );
  }
}

export default App;
