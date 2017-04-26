import {} from '../actions/GameServerActions';
const createPayloadForwardingAction = (type) => (payload) =>
  ({type: type, payload: payload});
export const CREATE_GAME_POST_REQUESTED = 'CREATE_GAME_POST_REQUESTED';
export const createGamePostRequested = (type) => ({
  type: CREATE_GAME_POST_REQUESTED,
  payload: {
    type: type,
  }
});
export const GUESS_POST_REQUESTED = 'GUESS_POST_REQUESTED';
export const guessPostRequested = (guess, id) => ({
  type: GUESS_POST_REQUESTED,
  payload: {
    guess: guess,
    id: id
  }
});
export const CREATE_GAME_POST_SUCCEEDED = 'CREATE_GAME_POST_SUCCEEDED';
export const createGamePostSucceeded = createPayloadForwardingAction(CREATE_GAME_POST_SUCCEEDED);

export const CREATE_GAME_POST_FAILED = 'CREATE_GAME_POST_FAILED';
export const createGamePostFailed = createPayloadForwardingAction(CREATE_GAME_POST_FAILED);

export const GUESS_POST_SUCCEEDED = 'GUESS_POST_SUCCEEDED';
export const guessPostSucceeded = createPayloadForwardingAction(GUESS_POST_SUCCEEDED);

export const GUESS_POST_FAILED = 'GUESS_POST_FAILED';
export const guessPostFailed = createPayloadForwardingAction(GUESS_POST_FAILED);

export const CONNECTION_PLAYER_REQUESTED = 'CONNECTION_REQUESTED';
export const connectPlayerRequested = (name) => ({
  type: CONNECTION_PLAYER_REQUESTED,
  payload: {
    name: name
  }
});
export const CONNECTION_PLAYER_SUCCEEDED = 'CONNECTION_SUCCEEDED';
export const connectPlayerSucceeded = createPayloadForwardingAction(CONNECTION_PLAYER_SUCCEEDED);
export const MESSAGE_RECIEVED = 'MESSAGE_RECIEVED';
export const messageRecieved = createPayloadForwardingAction(MESSAGE_RECIEVED);
export const PLAYERS_LIST_RECIEVED = 'PLAYERS_LIST_RECIEVED';
export const playersListRecieved = (players) => ({
  type: PLAYERS_LIST_RECIEVED,
  payload: {
    players: players
  }
});
export const PLAYER_ID_RECIEVED = 'PLAYER_ID_RECIEVED';
export const playerIdRecieved = createPayloadForwardingAction(PLAYER_ID_RECIEVED);
export const DISCONNECTION_PLAYER_REQUESTED = 'DISCONNECTION_PLAYER_REQUESTED';
export const disconnectPlayerRequested = () => ({
  type: DISCONNECTION_PLAYER_REQUESTED,
  payload: {}
});

export const DISCONNECTION_PLAYER_SUCCEEDED = 'DISCONNECTION_SUCCEEDED';
export const disconnectPlayerSucceeded = createPayloadForwardingAction(DISCONNECTION_PLAYER_SUCCEEDED);
