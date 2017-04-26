import GameReducer from './GameReducer';
import WebSocketReducer from './WebSocketReducer';

import {combineReducers} from 'redux';

export default combineReducers({
  connection: WebSocketReducer,
  games: GameReducer
});
