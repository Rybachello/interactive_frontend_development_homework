import {connect} from 'react-redux';
import {createGamePostRequested} from '../actions';
import GameCreation from '../components/GameCreation';

const mapDispatchToProps = (dispatch) => ({
    createGame: (type) => dispatch(createGamePostRequested(type))
});
const mapStateToProps = (state) => ({
   inFlight: state.fetchState.inFlight,
   error: state.fetchState.error
});
export default connect(mapStateToProps, mapDispatchToProps)(GameCreation);
