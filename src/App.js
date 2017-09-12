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
                <textarea rows="3" cols="50" autofocus="autofocus" placeholder="What's on your mind?">
                    
                </textarea>
                <input name="Post" type="submit"/>
                <div className="likes">
                    <button><img className="thumb" src={require('./thumb_up.png')} /></button>
                    <p className="like-counter">13</p>
                    <button><img className="dislike-thumb" src={require('./thumb_up.png')} /></button>
                    <p className="dislike-counter">6</p>
                    <button className="comment">comment</button>
                    <button className="delete">delete</button>
                </div>
            </div>
            <ul>
                <div className="replyMessage">
                    <div className="commentDiv">
                        <li>
                            <textarea rows="3" cols="40" placeholder="Reply">
                            </textarea>
                            <input name="reply" type="submit" />
                        </li>
                    </div>
                    <div className="likes">
                        <button><img className="thumb" src={require('./thumb_up.png')} /></button>
                        <p className="like-counter">4</p>
                        <button><img className="dislike-thumb" src={require('./thumb_up.png')} /></button>
                        <p className="dislike-counter">2</p>
                        <button className="comment">comment</button>
                        <button className="delete">delete</button>
                    </div>
                </div>
            </ul>
        </form>
      </div>
    );
  }
}

export default App;
