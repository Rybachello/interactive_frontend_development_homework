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
                    };
                }
            );
        case WORD_GUESS:
            return state.map((game) => {
                if (game.id != action.payload.id) {
                    return game;
                }
                let result = [];
                let length = game.target.length >= action.payload.word.length ? game.target.length : action.word.length;
                for (let i = 0; i < length; i++) {
                    if (action.payload.word[i] === game.target[i]) {
                        result.push(i);
                    }
                }
                return {
                    ...game,
                    isGameOver: game.target == action.payload.word,
                    moves: game.moves.concat({
                            matches: result,
                            word: action.payload.word
                        }
                    )
                };
            });
        default:
            return state;
    }
};


export const LT = 'LT';
export const GT = 'GT';
export const EQ = 'EQ';

export default GamesReducer;
