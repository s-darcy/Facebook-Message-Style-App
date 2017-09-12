import React, {Component} from 'react';

class ReplyAction extends Component {
    
    render () {
      
        return (
            <div className="likes">
                <div>                                        
                    <p className="repliedComment">Here is where the typed reply will post</p>
                </div>
                <div className="actionButtons">
                    <button><img className="thumb" src={require('./thumb_up.png')} /></button>
                    <p className="like-counter">4</p>
                    <button><img className="dislike-thumb" src={require('./thumb_up.png')} /></button>
                    <p className="dislike-counter">2</p>
                    <button className="comment">comment</button>
                    <button className="delete">delete</button>
                </div>
            </div>
        );
    }
    
}

export default ReplyAction;