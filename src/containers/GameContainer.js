import {connect} from 'react-redux';
import {guessPostRequested} from '../actions';
import GameList from '../components/GameList';

const mapDispatchToProps = (dispatch) => ({
    onNumberSubmit: (number, id) => dispatch(guessPostRequested(number, id)),
    onWordSubmit: (word, id) => dispatch(guessPostRequested(word, id))
});
const mapStateToProps = (state) => ({
    games: state.games
});

export default connect(mapStateToProps, mapDispatchToProps)(GameList);

