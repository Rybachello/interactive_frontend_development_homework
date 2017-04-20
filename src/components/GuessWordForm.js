import React, {Component} from 'react';
class GuessWordForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            word: ''
        };
        this.setState = this.setState.bind(this);
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
        if (this.props.inFlight.inFlight) {
            return (
                <h2>Loading...</h2>
            )
        }
        return (
            <div className='guess-form'>
                <h4>{this.props.inFlight.error ? `${this.props.inFlight.error.error}` : ``}</h4>
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
GuessWordForm.propTypes = {
    onSubmit: React.PropTypes.func.isRequired,
};
export default GuessWordForm;
