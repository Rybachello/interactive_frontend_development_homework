import React, {Component} from 'react';
import PropTypes from 'prop-types';
class GuessWordForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: '',
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
    if (this.props.fetchState.inFlight) {
      return (
          <h2>Loading...</h2>
      );
    }
    return (
        <div className='guess-form'>
          <h4>{this.props.fetchState.error
              ? `${this.props.fetchState.error.error}`
              : ``}</h4>
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
  fetchState: PropTypes.shape({
    error: PropTypes.shape({
      id: PropTypes.string,
      error: PropTypes.string,
    }),
    inFlight: PropTypes.bool.isRequired,
  }),
  onSubmit: PropTypes.func.isRequired,
};
export default GuessWordForm;
