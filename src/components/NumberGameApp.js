import React from 'react';
import GuessNumberForm from './GuessNumberForm';
import NumberHintList from './NumberHintList';
import PropTypes from 'prop-types';
const NumberGameApp = (props) => {
  if (props.game.status === 'waiting_for_move') {
    return (
        <div className='guess_number'>
          <h2>Number Guess Game</h2>
          <GuessNumberForm fetchState={props.game.fetchState}
                           onSubmit={(number) => props.onNumberSubmit(number,
                               props.game.id)}/>
          <NumberHintList moves={props.game.move}/>
        </div>
    );
  }
  if (props.game.status === 'finished') {
    return (
        <div className='guess_number'>
          <h2>Number Guess Game</h2>
          <font size='4'>You win</font>
          <NumberHintList moves={props.game.move}/>
        </div>
    );
  }
};
NumberGameApp.propTypes = {
  game: PropTypes.shape({
    status: PropTypes.string,
    moves: PropTypes.array,
    id: PropTypes.string,
    type: PropTypes.string,
    fetchState: PropTypes.shape({
      inFlight: PropTypes.bool,
      error: PropTypes.string,
    }).isRequired,
  }).isRequired,
  onNumberSubmit: PropTypes.func,
};
export default NumberGameApp;
