import {connect} from 'react-redux';
import {
  connectPlayerRequested,
  disconnectPlayerRequested
} from '../actions';
import GameLobby from '../components/GameLobby';

const mapDispatchToProps = (dispatch) => ({
  onConnectClick: (name) => dispatch(connectPlayerRequested(name)),
  onDisconnectClick: () => dispatch(disconnectPlayerRequested())
});
const mapStateToProps = (state) => ({
  connection: state.connection
});
export default connect(mapStateToProps, mapDispatchToProps)(GameLobby);
