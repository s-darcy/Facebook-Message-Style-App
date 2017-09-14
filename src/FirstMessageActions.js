
import React, {Component} from 'react';
import data from './data';
import FirstMessage from './FirstMessage';

class FirstMessageActions extends Component {
    
    render () {
      
        return (
            <div className="likes">
                <p>{}</p>
                <div className="actionButtons">
                    <button onClick={(event) => this.props.handleLikeCount(event)}><img className="thumb" src={require('./thumb_up.png')} /></button>
                    <p className="like-counter">{this.props.likes.likes}</p>
                    <button><img className="dislike-thumb" src={require('./thumb_up.png')} /></button>
                    <p className="dislike-counter">6</p>
                    <button className="comment">comment</button>
                    <button className="delete">delete</button>
                </div>
            </div>
        );
    }
    
}

export default FirstMessageActions;