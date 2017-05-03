import React from 'react';
import NumberGameApp from './NumberGameAppComponent';
import WordGameApp from './WordGameAppComponent';
import PropTypes from 'prop-types';

const GameOrNotFound = ({game, gameId, onNumberSubmit, onWordSubmit}) => {
  if (game) {
    if (game.type === 'guess_number') {
      return (
          <NumberGameApp game={game} onNumberSubmit={onNumberSubmit}/>
      );
    } else if (game.type === 'guess_word') {
      return (
          <WordGameApp game={game} onWordSubmit={onWordSubmit}/>
      );
    }
  } else {
    return <p>Game {gameId} not found</p>;
  }
};

GameOrNotFound.propTypes = {
  game: PropTypes.shape({
    id: PropTypes.string,
    type: PropTypes.string,
    status: PropTypes.string,
    fetchState: PropTypes.object,
    moves: PropTypes.array,
  }),
  onNumberSubmit: PropTypes.func,
  onWordSubmit: PropTypes.func,
  gameId: PropTypes.string.isRequired,
};
export default GameOrNotFound;
