import React, { Component } from 'react';
import './App.css';
import data from './data';
import FirstMessage from './FirstMessage';

class App extends Component {
    
    constructor() {
        super();
        this.state = data;
        
//        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleLikeCount = this.handleLikeCount.bind(this);
        this.handleFirstCommentUpdate = this.handleFirstCommentUpdate.bind(this);
        this.updateSubmittedProp = this.updateSubmittedProp.bind(this);
        
    }
    
    //This one shows the letters as they are being typed
    // This functions job is to update the text property for this comment.
    handleFirstCommentUpdate(event, index) {
        let commentObj = Object.assign({}, this.state.firstComment[index]);
        commentObj.text = event.target.value;
        
        let modifiedFirstComment = this.state.firstComment.slice();
        modifiedFirstComment[index] = commentObj;
        
        this.setState({
            firstComment: modifiedFirstComment
        });
    }


    // This functions job is to lock the textarea by switching submitted to true.
    handleSubmit(event, text){
        console.log(firstComment.text);
        event.preventDefault();
        let firstComment = this.state.firstComment.slice();
        
        firstComment.push({ text });
        
        this.setState({
            firstComment : firstComment
        }); 
    }
    
    updateSubmittedProp (event) {
        event.preventDefault();
        let updateSubmitted = this.state.firstComment.slice();
        
        updateSubmitted.submitted = true;
        
        console.log(updateSubmitted);
        this.setState({
            firstComment : updateSubmitted
        }); 
    }
       
    handleLikeCount (event) {
        event.preventDefault();
        let actionButtons = this.state.actionButtons.slice();
        
        let newLikeCount = actionButtons.likeCount + 1;
        actionButtons.likeCount = newLikeCount;

        this.setState({
            actionButtons : newLikeCount
        });
//        console.log(newLikeCount);
    }

//    
//        "firstComment" : [
//        {
//            "text": '',
//            "submitted": false,
//            "likes": 0,
//            "dislikes": 0,
//            "replies": [
//                {
//                "text": '',
//                "submitted": false,
//                "likes": 0,
//                "dislikes": 0,
//                }
//            ],
//        }
//    ],
    
    //when the 'like' button is clicked, edit the CSS to change the color of the background

      render() {
          
//          console.log(Array.isArray (this.state.firstComment));
//          console.log(Array.isArray (this.state.actionButtons));
//          console.log(this.state);
          
            let originalMessage = this.state.firstComment.map(function(obj, index){
                return (
                  <FirstMessage
                      data={obj}
                      index={index}
                      handleChange={this.handleFirstCommentUpdate}
                      handleSubmit={this.handleSubmit}
                      handleLikeCount={this.handleLikeCount}
                      updateSubmittedProp={this.updateSubmittedProp}    
                   />
                  );
              }, this);    
                  
          
        return (
          <div className="App">
            <h1>Facebook Messenger App</h1>
            <div className="firstMessage">
            
                <div>
                    {originalMessage}
                </div>

            </div>
          </div>
        );
      }
}

export default App;
