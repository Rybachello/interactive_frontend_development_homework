import {
  CONNECTION_PLAYER_REQUESTED,
  DISCONNECTION_PLAYER_REQUESTED
} from '../actions/index';

import {
  connectPlayer,
  disconnectPlayer
} from '../actions/WebSocketActions';

const ACTION_TYPE_TO_SERVER_ACTION = {
  [CONNECTION_PLAYER_REQUESTED]: connectPlayer,
  [DISCONNECTION_PLAYER_REQUESTED]: disconnectPlayer
};

const connectingMiddleware = (store) => (next) => (action) => {
  const serverAction = ACTION_TYPE_TO_SERVER_ACTION[action.type];
  if (serverAction) {
    serverAction(action.payload)(store.dispatch);
  }
  return next(action);
};
export default connectingMiddleware;

