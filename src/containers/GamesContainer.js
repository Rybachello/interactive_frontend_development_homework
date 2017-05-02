import {connect} from 'react-redux';

import GameList from '../components/GameList';


const mapStateToProps = (state, ownProps) => ({
  games: state.games.games,
  status: state.connection.status,
  location: ownProps.history.location,
});

export default connect(mapStateToProps)(GameList);

