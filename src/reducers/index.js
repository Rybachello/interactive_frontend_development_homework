import {
    GUESS_POST_REQUESTED,
    GUESS_POST_FAILED,
    GUESS_POST_SUCCEEDED,
    CREATE_GAME_POST_REQUESTED,
    CREATE_GAME_POST_FAILED,
    CREATE_GAME_POST_SUCCEEDED

} from '../actions/index';

const initialState = {
    fetchState: {inFlight: false},
    games: []
};

const GameReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_GAME_POST_REQUESTED: {
            return {
                ...state,
                fetchState: {inFlight: true}
            };
        }
        case CREATE_GAME_POST_SUCCEEDED: {
            return {
                ...state,
                fetchState: {inFlight: false},
                games: state.games.concat({
                    id: action.payload.id,
                    type: action.payload.type,
                    move: [],
                    inFlight: {inFlight: false},
                    status: action.payload.status
                })
            }
        }
        case CREATE_GAME_POST_FAILED: {
            return {
                ...state,
                fetchState: {inFlight: false, error: action.payload.error},
            };
        }
        case GUESS_POST_REQUESTED: {
            return {
                ...state,
                games: state.games.map((game) => {
                    if (game.id != action.payload.id) {
                        return game;
                    }
                    return {
                        ...game,
                        inFlight: {inFlight: true}
                    }
                })
            }
        }
        case GUESS_POST_SUCCEEDED: {
            // console.log(action.payload);
            // console.log(state);
            return {
                ...state,
                games: state.games.map((game) => {
                    if (game.id != action.payload.game.id) {
                        return game;
                    }
                    return {
                        ...game,
                        move: game.move.concat(action.payload.move),
                        status: action.payload.game.status,
                        inFlight: {inFlight: false}
                    }
                })
            }
        }
        case GUESS_POST_FAILED: {
            return {
                ...state,
                games: state.games.map((game) => {
                    console.log(action.payload.id);
                    if (game.id != action.payload.id) {
                        return game;
                    }
                    return {
                        ...game,
                        inFlight: {inFlight: false, error: action.payload}
                    }
                })
            }
        }

        default:
            return state;
    }
};

export const LT = 'LT';
export const GT = 'GT';
export const EQ = 'EQ';

export default GameReducer;
