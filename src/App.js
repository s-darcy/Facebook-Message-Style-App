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
    }
    
    //This one shows the letters as they are being typed
    handleChange(event) {
        const newPost = event.target.value;
        let firstMessage = Object.assign({}, this.state.firstMessage);
        firstMessage.comment = newPost;
        
        this.setState({
            firstMessage : newPost
        });
        console.log(firstMessage);
    }
    
    //This one should store the value into my object as state
    handleSubmit(event){
        event.preventDefault();
        let messageInput = this.state.firstMessage.slice();
        console.log(messageInput);
         
    }
      
    
    //when the 'like' button is clicked, edit the CSS to change the color of the background

      render() {

//        let firstMessageToPost = this.state.firstMessage.comment.map(function(index){
//            return (    
//                <FirstMessageActions
//                    firstMessage={this.firstMessage}
//                    key={this.index}
//                />
//            );
//        }, this);

        return (
          <div className="App">
            <h1>Facebook Messenger App</h1>
            <div className="firstMessage">
                <FirstMessage
                    firstMessage={this.firstMessage}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                />
                <FirstMessageActions 
                   handleSubmit={this.handleSubmit} 
                />

            </div>
            <ul>
                <Reply />
            </ul>
          </div>
        );
      }
}

export default App;
