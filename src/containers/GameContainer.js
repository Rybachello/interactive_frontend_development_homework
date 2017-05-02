import React from 'react';
import {guessPostRequested} from '../actions';
import NumberGameApp from '../components/NumberGameApp';
import WordGameApp from '../components/WordGameApp';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const GameOrNotFound = ({game, gameId, onNumberSubmit, onWordSubmit}) => {
  if (game === null) {
    return <p>Game {gameId} not found</p>;
  }
  if (game.type === 'guess_number') {
    return (
        <NumberGameApp game={game} onNumberSubmit={onNumberSubmit}
                       key={gameId}>
        </NumberGameApp>
    );
  } else if (game.type === 'guess_word') {
    return (
        <WordGameApp game={game} onWordSubmit={onWordSubmit} key={gameId}>
        </WordGameApp>
    );
  }
};
//todo: fix prop types
GameOrNotFound.propTypes = {
  game: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    type: PropTypes.string,
    status: PropTypes.string,
    fetchState: PropTypes.object,
    moves: PropTypes.array,
  })),
  onNumberSubmit: PropTypes.func,
  onWordSubmit: PropTypes.func,
  gameId: PropTypes.string.isRequired,
};
const mapDispatchToProps = (dispatch) => ({
  onNumberSubmit: (number, id) => dispatch(guessPostRequested(number, id)),
  onWordSubmit: (word, id) => dispatch(guessPostRequested(word, id)),
});
const mapStateToProps = (state, ownProps) => {
  const gameId = ownProps.match.params.gameId;
  const game = state.games.games.find((game) => game.id === gameId);
  return {game, gameId: gameId};
};

export default connect(mapStateToProps, mapDispatchToProps)(GameOrNotFound);
