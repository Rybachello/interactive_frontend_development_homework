import {connect} from 'react-redux';
import {onNumberSubmit,onWordSubmit} from '../actions';
import GameList from '../components/GameList';

const mapDispatchToProps = (dispatch) => ({
    onNumberSubmit: (number,id) => dispatch(onNumberSubmit(number,id)),
    onWordSubmit:(word,id) => dispatch(onWordSubmit(word,id))
});
const mapStateToProps = (state) => ({
    gameList:state
});

export default connect(mapStateToProps, mapDispatchToProps)(GameList);

