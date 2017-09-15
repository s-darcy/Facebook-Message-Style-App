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
        event.preventDefault();
        const newPost = event.target.value;
        let firstComment=  this.state.firstComment.slice();
        firstComment.text = newPost;
        console.log(newPost);
        
        this.setState({
            firstComment : newPost
        });
        console.log(firstComment);
    }
    
    handleLikeCount (event) {
        event.preventDefault();
        let actionButtons = Object.assign({}, this.state.actionButtons);
        
        let newLikeCount = actionButtons.likeCount + 1;
        actionButtons.likeCount = newLikeCount;

        this.setState({
            actionButtons : newLikeCount
        });
        console.log(newLikeCount);
    }
    
    
    //This one should store the value into my object as state
    handleSubmit(text, event){
        event.preventDefault();
        let firstComment = this.state.firstComment.filter(function(text){
            if (text !== ''){
                return text;
            }
        });
        
        this.setState({
            firstComment : firstComment
        }); 
    }

    //when the 'like' button is clicked, edit the CSS to change the color of the background

      render() {
          
          console.log(Array.isArray (this.state.firstComment));
          console.log(this.state);
          
            let originalMessage = this.state.firstComment.map(function(text, index){
                return (
                  <FirstMessage
                      text={text}
                      index={index}
                      handleChange={this.handleChange}
                      handleSubmit={this.handleSubmit}
                      handleCount={this.handleCount}
                   />
                  );
              }, this);    
                  
            let originalMessageActions = this.state.actionButtons.map(function(comment, likes){
                return (          
                  <FirstMessageActions 
                       comment={comment}
                       likes={likes}    
                       handleSubmit={this.handleSubmit}
                       message={this.message}
                       handleLikeCount = {this.handleLikeCount} 
                    /> 
                 );
              }, this);
          
        return (
          <div className="App">
            <h1>Facebook Messenger App</h1>
            <div className="firstMessage">
            
                <div>
                    {originalMessage}
                    {originalMessageActions}
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
