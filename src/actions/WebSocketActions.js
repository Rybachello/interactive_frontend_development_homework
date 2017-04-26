import {
  connectPlayerFailed,
  connectPlayerRequested,
  connectPlayerSucceeded,
  playersListRecieved,
  messageRecieved,
  CONNECTION_PLAYER_FAILED,
  CONNECTION_PLAYER_SUCCEEDED
} from './index'
import { connect } from '../WebSocket'

let webSocketConnection = null
export const connectPlayer = ({name}) => (dispatch) => {
  webSocketConnection = connect({
    onOpen: () => {
    },
    onClose: ({reason}) => {
      dispatch(connectPlayerFailed({type: CONNECTION_PLAYER_FAILED, payload: {reason}}))
    },
    //todo:finish here
    onMessage: ({eventName, payload}) => {
      dispatch(messageRecieved({eventName, payload}))
      if (eventName === 'connection:accepted') {
        dispatch(connectPlayerSucceeded({type: CONNECTION_PLAYER_SUCCEEDED}))
      }
      if (eventName === 'online-players') {
        dispatch(playersListRecieved(payload))
      }
    },
    parameters: {playerName: name}
  })
}
export const disconnectPlayer = ({type}) => (dispatch) => {
}

// onOpen: () =>
// store.dispatch({type: 'CONNECTED'}),
// onClose: ({reason}) =>
// store.dispatch({type: 'DISCONNECTED', payload: {reason}}),
// onMessage: ({eventName, payload}) => {
// // Simply map eventName to action creator
// store.dispatch(messageToAction[eventName](payload));

//   // Every asynchronous process initiation is accompanied by a notification
//   store.dispatch({type: 'CONNECTING'})
//
//   webSocketConnection = connectWebSocket({
//     onOpen: () =>
//       store.dispatch({type: 'CONNECTED'}),
//     onClose: ({reason}) =>
//       store.dispatch({type: 'DISCONNECTED', payload: {reason}}),
//     onMessage: ({eventName, payload}) => {
//       // Simply map eventName to action creator
//       store.dispatch(messageToAction[eventName](payload))
//
//       // // Reconnect after every 3 pings to illustrate disconnection and a new connection.
//       // if (eventName === 'ping' && payload.pingCount == 3) {
//       //   webSocketConnection.close();
//       //   setTimeout(() => initiateConnection(), 1000);
//       // }
//     }
//   })
// }
