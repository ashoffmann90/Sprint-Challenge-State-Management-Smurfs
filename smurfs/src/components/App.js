import React, { Component } from "react";
import "./App.css";
import Form from "./Form";
import Smurfs from "./Smurfs";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <h1>Make a Smurf!</h1>
        <Form/><br/>
        <h1>Show your village!</h1>
        <Smurfs/>
      </div>
    );
  }
}

export default App;
