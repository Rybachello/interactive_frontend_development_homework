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

