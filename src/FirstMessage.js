import React, {Component} from 'react';
import data from './data';
import FirstMessageActions from './FirstMessageActions';

class FirstMessage extends Component {
    
    render () {
        
        const isSubmitted = true;
      
        return (
            <div>
                <form onSubmit={(event) => this.props.handleSubmit(event)} >
                    <p>asdf</p>
                    <textarea rows="3" cols="50"
                        placeholder="What's on your mind?"
                        onBlur={this.props.handleChange}
                        value={this.props.message}
                        type="text">
                    </textarea>
                    <input type="submit" value="Submit"  />
                </form>
            </div>
        );
    }
    
}

export default FirstMessage;


//
//
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