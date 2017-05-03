import {guessPostRequested} from '../actions';
import {connect} from 'react-redux';
import GameOrNotFoundComponent from '../components/GameOrNotFoundComponent';

const mapDispatchToProps = (dispatch) => ({
  onNumberSubmit: (number, id) => dispatch(guessPostRequested(number, id)),
  onWordSubmit: (word, id) => dispatch(guessPostRequested(word, id)),
});
const mapStateToProps = (state, ownProps) => {
  const gameId = ownProps.match.params.gameId;
  const game = state.games.games.find((game) => game.id === gameId);
  return {game, gameId: gameId};
};

export default connect(mapStateToProps, mapDispatchToProps)(
    GameOrNotFoundComponent);
