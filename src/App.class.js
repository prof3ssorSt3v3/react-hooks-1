//the App.js file from version 16 of React
//images and default content removed

import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { hungry: false, num: 1 };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(() => ({ hungry: !this.state.hungry }));
  }
  componentDidMount() {
    //side effects after initial load
    console.log('mounted');
  }
  componentDidUpdate() {
    //side effects after reload caused by state change
    console.log('updated');
  }
  render() {
    return (
      <div className="App">
        <h1 onClick={this.handleClick}>Hungry `Class`</h1>
        <p>
          Learn React when you are {this.state.hungry ? 'REALLY' : 'NOT'} hungry
        </p>
      </div>
    );
  }
}
export default App;
