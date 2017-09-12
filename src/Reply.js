

import React, {Component} from 'react';
import ReplyAction from './ReplyAction';

class Reply extends Component {
    
    render () {
      
        return (
            <li>
                <div className="replyMessage">
                    <div className="commentDiv">
                        <textarea rows="3" cols="40" placeholder="Reply"></textarea>
                        <input name="reply" type="submit" />
                    </div> 
                    <ReplyAction />
                </div>
            </li>
        );
    }
    
}

export default Reply;