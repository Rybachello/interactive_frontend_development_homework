import GameReducer from './GameReducer';
import WebSocketReducer from './WebSocketReducer';

import {combineReducers} from 'redux';

export default combineReducers({
    game:GameReducer,
    connection: WebSocketReducer
});
