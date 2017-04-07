import {GAME_CREATION, NUMBER_GUESS, WORD_GUESS} from '../actions/actionType.js';

const initialState = [];
const GamesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GAME_CREATION:
            return state.concat(action.payload);
        case NUMBER_GUESS:
            return state.map((game) => {
                    if (game.id != action.payload.id) {
                        return game;
                    }
                    let newGuess = game.target > action.payload.number ? LT : GT;
                    if (game.target == action.payload.number) {
                        newGuess = EQ;
                    }
                    return {
                        ...game,
                        isGameOver: game.target == action.payload.number,
                        moves: game.moves.concat({
                                guess: newGuess,
                                number: action.payload.number
                            }
                        )
                    }
                }
            );

        default:
            return state;
    }
};


export const LT = 'LT';
export const GT = 'GT';
export const EQ = 'EQ';

export default GamesReducer;
