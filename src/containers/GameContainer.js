import {connect} from 'react-redux';
import {NumberGuess,WordGuess} from '../actions';
import GameList from '../components/GameList';

const mapDispatchToProps = (dispatch) => ({
    NumberGuess: (number) => dispatch(NumberGuess(number)),
    WordGuess:(word) => dispatch(WordGuess(word))
});
const mapStateToProps = (state) => ({
    gameList:state
});

export default connect(undefined, mapDispatchToProps)(GameList);

