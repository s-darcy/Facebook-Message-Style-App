
import React, {Component} from 'react';
import data from './data';

class FirstMessageActions extends Component {
    
    render () {
      
        return (
            <div className="likes">
                <div>
                    <p className="postedComment">{this.props.firstMessage}</p>
                </div>
                <div className="actionButtons">
                    <button><img className="thumb" src={require('./thumb_up.png')} /></button>
                    <p className="like-counter">13</p>
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