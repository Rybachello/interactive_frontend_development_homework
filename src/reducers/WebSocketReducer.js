import {
  CONNECTION_PLAYER_REQUESTED,
  CONNECTION_PLAYER_SUCCEEDED,
  DISCONNECTION_PLAYER_SUCCEEDED,
  PLAYER_ID_RECIEVED,
  PLAYERS_LIST_RECIEVED

} from '../actions/index'

const initialState = {
  status: 'disconnected',
  disconnectReason: null,
  playerId: '0',
  players: []
}

const WebSocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONNECTION_PLAYER_REQUESTED: {
      return {
        ...state,
        status: 'connecting'
      }
    }
    case CONNECTION_PLAYER_SUCCEEDED: {
      return {
        ...state,
        status: 'connected'
      }
    }

    case PLAYER_ID_RECIEVED: {
      return {
        ...state,
        playerId: action.payload.playerId
      }
    }
    case
    PLAYERS_LIST_RECIEVED: {
      return {
        ...state,
        players: action.payload.players

      }
    }
    case
    DISCONNECTION_PLAYER_SUCCEEDED: {
      if (action.payload.reason) {
        return {
          ...state,
          status: 'disconnected',
          disconnectReason:action.payload.reason
        }
      }
      return initialState
    }
    default: {
      return state
    }
  }
}

export default WebSocketReducer
