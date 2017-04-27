import {
  connectPlayerSucceeded,
  playersListRecieved,
  disconnectPlayerSucceeded,
  playerIdRecieved
} from './index';
import {connect} from '../WebSocket';

let webSocketConnection = null;
export const connectPlayer = ({name}) => (dispatch) => {
  webSocketConnection = connect({
    onOpen: () => {
      dispatch(connectPlayerSucceeded());
    },
    onClose: ({reason}) => {
      dispatch(disconnectPlayerSucceeded({reason}));
    },
    onMessage: ({eventName, payload}) => {
      if (eventName === 'connection:accepted') {
        dispatch(playerIdRecieved(payload));
      }
      if (eventName === 'online-players') {
        dispatch(playersListRecieved(payload));
      }
    },
    parameters: {playerName: name}
  });
};
export const disconnectPlayer = () => () => {
  webSocketConnection.close();
};
