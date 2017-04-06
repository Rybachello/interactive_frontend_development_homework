import {GAME_CREATION,NUMBER_GUESS,WORD_GUESS} from '../actions/actionType.js';

const WORDS = ['paper', 'grill', 'basil', 'hinge', 'ruler'];
const MIN_NUMBER = 0;
const MAX_NUMBER = 9;
let nextId = 1;

export const CreateGame = (type) => {
    if (type === 'number-game') {
        return {
            type: GAME_CREATION,
            payload: {
                type: type,
                id: nextId++,
                isGameOver: false,
                target: Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER + 1) + MIN_NUMBER),
                move: []
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
                move: []
            }
        };
    }
};

export const NumberGuess = ({number}) => {
    return {
        type: NUMBER_GUESS,
        payload: {
            number:number
        }
    }
};

export const WordGuess = ({word}) => {
    return {
        type: WORD_GUESS,
        payload: {
            word:word
        }
    }
};




