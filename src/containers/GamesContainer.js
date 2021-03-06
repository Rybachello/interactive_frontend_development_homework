import {connect} from 'react-redux';

import GameList from '../components/GameListComponent';


const mapStateToProps = (state, ownProps) => ({
  games: state.games.games,
  status: state.connection.status,
  location: ownProps.history.location,
});

export default connect(mapStateToProps)(GameList);

