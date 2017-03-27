/**
 * Created by Rybachello on 3/26/2017.
 */
/**
 * Created by Rybachello on 3/26/2017.
 */
import React, {Component} from 'react';
class GuessWordForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            word: ''
        };
    }

    handleWordChange(event) {
        this.setState({word: event.target.value});
    }

    handleEnter(event) {
        if (event.keyCode === 13) {
            if (this.state.word) {
                this.props.onSubmit(this.state.word);
                this.setState({word: ''});
            }
        }
    }

    render() {
        return (
            <div className='guess-form'>
                <font size='4'>Guess a five letter word</font>
                <br/>
                <br/>
                <input type='text'
                       value={this.state.word}
                       onChange={this.handleWordChange.bind(this)}
                       onKeyUp={this.handleEnter.bind(this)}
                />
            </div>
        );
    }
}

export default GuessWordForm;
