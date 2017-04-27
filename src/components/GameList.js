import React from 'react';
import PropTypes from 'prop-types';
import NumberGameApp from './NumberGameApp';
import WordGameApp from './WordGameApp';
const GameList = (props) => {
  const gameElements = props.games.map((game, idx) => {
    if (game.type === 'guess_number') {
      return (
          <NumberGameApp game={game} onNumberSubmit={props.onNumberSubmit}
                         key={idx}>
          </NumberGameApp>
      );
    } else if (game.type === 'guess_word') {
      return (
          <WordGameApp game={game} onWordSubmit={props.onWordSubmit} key={idx}>
          </WordGameApp>
      );
    }
  });

  return (
      <div className='game-list'>
        {gameElements}
      </div>
  );
};
GameList.propTypes = {
  games: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    type: PropTypes.string,
    status: PropTypes.string,
    fetchState: PropTypes.object,
    moves: PropTypes.array,
  })),
  onNumberSubmit: PropTypes.func,
  onWordSubmit: PropTypes.func,
};
export default GameList;
