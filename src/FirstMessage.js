import React, {Component} from 'react';
import data from './data';
import FirstMessageActions from './FirstMessageActions';

class FirstMessage extends Component {
    constructor() {
        super();
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmitHelper = this.handleSubmitHelper.bind(this);
        
    }
    
    handleChange(event) {
        event.preventDefault();
        this.props.handleChange(event, this.props.index);
    }
    
    handleSubmitHelper(event) {
        event.preventDefault();
        this.props.handleSubmit(event, this.props.text);
    }
    
//USE THE .splice() inorder to Delete!!!
    
    
    
//                    return (          
//                  <FirstMessageActions 
//                       comment={comment}
//                       likes={likeCount}    
//                       handleSubmit={this.handleSubmit}
//                       message={this.message}
//                       handleLikeCount = {this.handleLikeCount} 
//                    /> 

    render () {
        console.log(this.props.index);
        return (
            <div>
                <form onSubmit={(event) => this.props.handleSubmit, this.props.updateSubmittedProp} >
                
                    <textarea rows="3" cols="50" 
                        disabled={this.props.data.submitted}
                        placeholder="What's on your mind?"
                        onChange={this.handleChange}
                        type="text"
                        value={this.props.data.text}/>
                    <input type="submit" value="Submit" />
                </form>
                {this.props.data.submitted && <div className="actionButtons">
                    <button onClick={() => {}}><img className="thumb" src={require('./thumb_up.png')} /></button>
                    <p className="like-counter"></p>
                    <button><img className="dislike-thumb" src={require('./thumb_up.png')} /></button>
                    <p className="dislike-counter">6</p>
                    <button className="comment">comment</button>
                    <button className="delete">delete</button>
                </div>}
            </div>
        );
    }  
}

export default FirstMessage;


//  const isSubmitted = true;
//
//        return (
//            <div>
//                <form onSubmit={(event) => this.props.handleSubmit(event)} >
////
//                    {isSubmitted && (
//                     <p>asdf</p>
//                     )}
//                    {!isSubmitted && (
//                        <textarea rows="3" cols="50"
////                    autofocus="autofocus" 
//                    placeholder="What's on your mind?"
//                    onBlur={this.props.handleChange}
//                    value={this.props.message}
//                    type="text">
//                    </textarea>
//                    )}