import {GAME_CREATION, NUMBER_GUESS, WORD_GUESS} from '../actions/actionType.js';

const WORDS = ['paper', 'grill', 'basil', 'hinge', 'ruler'];
const MIN_NUMBER = 0;
const MAX_NUMBER = 9;
let nextId = 1;

export const createGame = (type) => {
    if (type === 'number-game') {
        return {
            type: GAME_CREATION,
            payload: {
                type: type,
                id: nextId++,
                isGameOver: false,
                target: Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER + 1) + MIN_NUMBER),
                moves: []
            }
        };
    } else if (type === 'word-game') {
        return {
            type: GAME_CREATION,
            payload: {
                type: type,
                id: nextId++,
                isGameOver: false,
                target: WORDS[Math.floor(Math.random() * WORDS.length)],
                moves: []
            }
        };
    }
};

export const onNumberSubmit = (number, id) => {
    return {
        type: NUMBER_GUESS,
        payload: {
            id: id,
            number: number
        }
    };
};

export const onWordSubmit = (word, id) => {
    return {
        type: WORD_GUESS,
        payload: {
            id: id,
            word: word
        }
    };
};
