import React, {Component} from 'react';
import './../CSS/App.css';
import {MainWindow} from "./MainWindow";
import {ButtonPane} from "./ButtonPane";

class App extends Component {
  render() {
    return (
      <div className="App">
          <MainWindow/>
          <ButtonPane/>
      </div>
    );
  }
}

export default App;
