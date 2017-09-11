import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Facebook Messegner App</h1>
        <form>
            <div className="firstMessage">
                <textarea rows="2" cols="50" autofocus="autofocus" placeholder="What's on your mind?">
                    
                </textarea>
                <input name="Post" type="submit"/>
            </div>
            <div className="replyMessage">
                <textarea rows="2" cols="40" placeholder="Reply">
                </textarea>
                <input name="reply" type="submit" />
            </div>
        </form>
      </div>
    );
  }
}

export default App;
