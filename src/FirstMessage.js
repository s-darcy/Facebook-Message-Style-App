import React, {Component} from 'react';
import data from './data';

class FirstMessage extends Component {
    
    render () {
      
        return (
            <div>
                <form onSubmit={(event) => this.props.handleSubmit(event)} >
                    <textarea rows="3" cols="50"
//                    autofocus="autofocus" 
                    placeholder="What's on your mind?"
                    onChange={this.props.handleChange}
                    value={this.props.firstMessage}
                    type="text">
                    </textarea>
                    <input type="submit" value="Submit"  />
                </form>
            </div>
        );
    }
    
}

export default FirstMessage;