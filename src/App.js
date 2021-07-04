import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    valor: 0,
  };

  increment = () => {
    this.setState((prevState) => {
      return { valor: prevState.valor + 1 };
    });
  };

  render() {
    const { valor } = this.state;
    return (
      <div>
        <span className="value">{valor}</span>
        <button id="inc" onClick={this.increment}>
          Incrementa
        </button>
      </div>
    );
  }
}

export default App;
