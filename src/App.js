import React, { Component } from 'react';
import './App.css';
import data from './data';
import FirstMessage from './FirstMessage';
import FirstMessageActions from './FirstMessageActions';
import Reply from './Reply';
import ReplyAction from './ReplyAction';

class App extends Component {
    
    constructor() {
        super();
        this.state = data;
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleLikeCount = this.handleLikeCount.bind(this);
    }
    
    //This one shows the letters as they are being typed
    handleChange(event) {
        const newPost = event.target.value;
        let message = Object.assign({}, this.state.message);
        message.firstMessage.comment = newPost;
        
        this.setState({
            message : newPost
        });
        console.log(message);
    }
    
    handleLikeCount (event) {
        event.preventDefault();
        let message = Object.assign({}, this.state.message);
        
        let newLikeCount = message.firstMessage.likeCount + 1;
        
        message.firstMessage.likeCount = newLikeCount;

        this.setState({
            message : newLikeCount
        });
        console.log(message);
    }
    
    
    //This one should store the value into my object as state
    handleSubmit(event){
        event.preventDefault();
        let message = this.state.message.slice();
        
        this.setState({
            message : message
        }); 
    }

    //when the 'like' button is clicked, edit the CSS to change the color of the background

      render() {
          console.log(Array.isArray (this.state.message));
          console.log(this.state.message);
          let original = this.state.message.map(function(comment, likes){
              <FirstMessageActions 
                   comment={comment}
                   likes={likes}    
                   handleSubmit={this.handleSubmit}
                   message={this.message}
                   handleLikeCount = {this.handleLikeCount}    
                />
          }, this);
          
        return (
          <div className="App">
            <h1>Facebook Messenger App</h1>
            <div className="firstMessage">
                <FirstMessage
                    message={this.message}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    handleCount={this.handleCount}
                />
                <div>
                    <p className="postedComment">{}</p>
                    {original}
                </div>

            </div>
            <ul>
                <Reply />
            </ul>
          </div>
        );
      }
}

export default App;
