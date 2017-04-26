import {connect} from 'react-redux';
import PlayerList from '../components/PlayersList';
//todo: fix here
// const mapDispatchToProps = (dispatch) => ({
//   onNumberSubmit: (number, id) => dispatch(guessPostRequested(number, id)),
//   onWordSubmit: (word, id) => dispatch(guessPostRequested(word, id))
// });


const mapStateToProps = (state) => ({
  players: state.connection.players,
  status:state.connection.status,
  player:state.connection.player
});

export default connect(mapStateToProps, undefined)(PlayerList);


