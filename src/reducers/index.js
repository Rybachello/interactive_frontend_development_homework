import {GAME_CREATION,NUMBER_GUESS,WORD_GUESS} from '../actions/actionType.js';

const initialState = [];
const GamesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GAME_CREATION:
            return state.concat(action.payload);
        default:
            return state;
    }
};
