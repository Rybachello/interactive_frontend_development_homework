import {
    CREATE_GAME_POST_REQUESTED,
    GUESS_POST_REQUESTED
} from '../actions/index';

import {
    postCreateGame,
    postGuess
} from '../actions/GameServerActions';

//todo: why we need this??
const ACTION_TYPE_TO_SERVER_ACTION = {
    [CREATE_GAME_POST_REQUESTED]: postCreateGame,
    [GUESS_POST_REQUESTED]: postGuess
};
//todo: fix here
const gameServerMiddleware = (store) => (next) => (action) => {
    const serverAction = ACTION_TYPE_TO_SERVER_ACTION[action.type];
    if (serverAction) {
        serverAction(action.payload)(store.dispatch);
    }
    return next(action);
};

export default gameServerMiddleware;