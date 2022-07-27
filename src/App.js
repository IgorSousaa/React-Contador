import React from "react";
import "./App.css";

export default class App extends React.Component {
  state = {
    numero: 0
  };

  aumentar = () => {
    if (this.state.numero <= 9) {
      this.setState({
        numero: this.state.numero + 1
      });
    }
  };

  diminuir = () => {
    if (this.state.numero >= 1) {
      this.setState({
        numero: this.state.numero - 1
      });
    }
  };

  render() {
    return (
      <>
        <h1>Calculadora</h1>
        <h2>{this.state.numero}</h2>

        <div>
          <button onClick={this.diminuir}>-</button>
          <button onClick={this.aumentar}>+</button>
        </div>
      </>
    );
  }
}
