import React from 'react';
import WordHintList from './WordHintList';
import GuessWordForm from './GuessWordForm';
import PropTypes from 'prop-types';
const WordGameApp = (props) => {
  if (props.game.status === 'waiting_for_move') {
    return (
        <div className='guess_word'>
          <h2>Word Guess Game</h2>
          <GuessWordForm fetchState={props.game.fetchState}
                         onSubmit={(word) => props.onWordSubmit(word,
                             props.game.id)}/>
          <WordHintList moves={props.game.move}/>
        </div>
    );
  }
  if (props.game.status === 'finished') {
    return (
        <div className='guess_word'>
          <h2>Word Guess Game</h2>
          <font size='4'>You win!</font>
          <WordHintList moves={props.game.move}/>
        </div>
    );
  }
};
WordGameApp.propTypes = {
  game: PropTypes.shape({
    id: PropTypes.string,
    type: PropTypes.string,
    move: PropTypes.array,
    fetchState: PropTypes.shape({
      inFlight: PropTypes.bool,
      error: PropTypes.shape,
    }),
    status: PropTypes.string,
  }),
  onWordSubmit: PropTypes.func.isRequired,
};

export default WordGameApp;
