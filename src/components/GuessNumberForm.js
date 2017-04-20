import React, {Component} from 'react';
class GuessNumberForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: ''
        };
        this.setState = this.setState.bind(this);
    }

    handleNumberChange(event) {
        if (!isNaN(event.target.value)) {
            const value = event.target.value;
            this.setState({number: value});
        }
    }

    handleEnter(event) {
        if (event.keyCode === 13) {
            if (this.state.number && this.state.number.length == 1) {
                this.props.onSubmit(parseInt(this.state.number));
                this.setState({number: ''});
            }
        }
    }

    render() {
        if (this.props.inFlight.inFlight) {
            return (
                <h2>Loading...</h2>
            )
        }
        else {
            return (
                <div className='guess-form'>
                    <h4>{this.props.inFlight.error ? `${this.props.inFlight.error.error}` : ``}</h4>
                    <font size='4'>Guess a number from 0 to 9</font>
                    <div>
                        <input type='text'
                               value={this.state.number}
                               onChange={this.handleNumberChange.bind(this)}
                               onKeyUp={this.handleEnter.bind(this)}
                        />
                    </div>
                </div>
            );
        }
    }
}
GuessNumberForm.propTypes = {
    onSubmit: React.PropTypes.func.isRequired,
};
export default GuessNumberForm;
