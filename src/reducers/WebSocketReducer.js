import {
  CONNECTION_PLAYER_REQUESTED,
  CONNECTION_PLAYER_SUCCEEDED,
  CONNECTION_PLAYER_FAILED,
  DISCONNECTION_PLAYER_REQUESTED,
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
    //todo: finish here
    case CONNECTION_PLAYER_SUCCEEDED: {
      console.log('CONNECTION_PLAYER_SUCCEEDED')
      console.log(action)
      return {
        ...state,
        status: 'connected',
        // player: {
        //   name: action.payload.name,
        //   id: action.payload.id
        // }
      }
    }

    //todo: finish here
    case
    CONNECTION_PLAYER_FAILED: {
      console.log('CONNECTION_PLAYER_FAILED')
      console.log(action)
      return {
        ...state,
        status: 'disconnected',
        disconnectReason: action.payload.reason
      }
    }
    case PLAYER_ID_RECIEVED:{
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
    DISCONNECTION_PLAYER_REQUESTED: {
      return initialState
    }
    default: {
      return state
    }
  }
}

export default WebSocketReducer
