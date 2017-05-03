import {connect} from 'react-redux';
import PlayerList from '../components/PlayersListComponent';

const mapStateToProps = (state) => ({
  players: state.connection.players,
  status: state.connection.status,
  playerId: state.connection.playerId
});

export default connect(mapStateToProps, undefined)(PlayerList);


