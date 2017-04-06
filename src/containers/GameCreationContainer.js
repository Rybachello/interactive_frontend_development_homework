import {connect} from 'react-redux';
import {CreateGame} from '../actions';
import GameCreation from '../components/GameCreation';

const mapDispatchToProps = (dispatch) => ({
    CreateGame: (type) => dispatch(CreateGame(type))
});

export default connect(undefined, mapDispatchToProps)(GameCreation);
