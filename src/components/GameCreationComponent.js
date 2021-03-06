import React from 'react';
import PropTypes from 'prop-types';
import Header from './HeaderComponent';
const GameCreation = (props) => {
  if (props.status !== 'connected') {
    return (
        <div/>
    );
  }

  if (props.inFlight) {
    return (
        <div className="input-forms">
          <Header text='Create a game!'/>
          <h2>Loading...</h2>
        </div>
    );
  } else {
    return (
        <div>
          <Header text='Create a game! '/>
          <h2>{props.error ? `${props.error}` : ``}</h2>
          <button className="number-game-button" type="number-game"
                  onClick={() => props.createGame('guess_number')}>Create new
            Number game
          </button>
          <button className="word-game-button" type="word-game"
                  onClick={() => props.createGame('guess_word')}>Create new Word
            game
          </button>
        </div>
    );
  }
};
GameCreation.propTypes = {
  createGame: PropTypes.func.isRequired,
  inFlight: PropTypes.bool.isRequired,
  status: PropTypes.string.isRequired,
  error: PropTypes.string,
};
export default GameCreation;
