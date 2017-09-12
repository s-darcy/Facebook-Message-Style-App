import React, {Component} from 'react';

class FirstMessage extends Component {
    
    render () {
      
        return (
            <div>
                <textarea rows="3" cols="50" autofocus="autofocus" placeholder="What's on your mind?">
                    
                </textarea>
                <input name="Post" type="submit"/>
            </div>
        );
    }
    
}

export default FirstMessage;