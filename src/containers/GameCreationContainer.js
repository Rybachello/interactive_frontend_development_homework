import {connect} from 'react-redux';
import {createGamePostRequested} from '../actions';
import GameCreation from '../components/GameCreationComponent';

const mapDispatchToProps = (dispatch) => ({
    createGame: (type) => dispatch(createGamePostRequested(type))
});
const mapStateToProps = (state) => ({
    inFlight: state.games.fetchState.inFlight,
    error: state.games.fetchState.error,
    status: state.connection.status
});
export default connect(mapStateToProps, mapDispatchToProps)(GameCreation);
