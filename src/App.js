import React, { Component } from 'react';
import './App.css';
import data from './data';
import FirstMessage from './FirstMessage';
import FirstMessageActions from './FirstMessageActions';
import Reply from './Reply';

class App extends Component {
    
    constructor() {
        super();
        this.state = data;
    }
    
  render() {
    return (
      <div className="App">
        <h1>Facebook Messenger App</h1>
        <form>
            <div className="firstMessage">
                <FirstMessage />
                <FirstMessageActions />
            </div>
            <ul>
                <Reply />
            </ul>
        </form>
      </div>
    );
  }
}

export default App;
