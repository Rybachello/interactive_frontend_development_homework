import React, {Component} from 'react';
class GuessWordForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            word: ''
        };
        this.handleWordChange = this.handleWordChange.bind(this);
        this.handleEnter = this.handleEnter.bind(this);
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
                       onChange={this.handleWordChange}
                       onKeyUp={this.handleEnter}
                />
            </div>
        );
    }
}
GuessWordForm.propTypes = {
    onSubmit: React.PropTypes.func.isRequired,
    word: React.PropTypes.string,
    handleWordChange: React.PropTypes.func.isRequired,
    handleEnter: React.PropTypes.func.isRequired
};
export default GuessWordForm;
