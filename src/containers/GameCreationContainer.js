import {connect} from 'react-redux';
import {createGame} from '../actions';
import GameCreation from '../components/GameCreation';

const mapDispatchToProps = (dispatch) => ({
    createGame: (type) => dispatch(createGame(type))
});

export default connect(undefined, mapDispatchToProps)(GameCreation);
