import {
    createGame, onNumberSubmit, onWordSubmit
} from '../../src/actions/index.js';

import reducer from '../../src/reducers/index';

describe('game reducer', () => {
    // it('is empty initially', () => {
    //     expect(reducer(undefined, {})).to.eql([]);
    // });
    // describe('create game', () => {
    //     it('create word game when number game is created', () => {
    //
    //         const stateAfterFirstGameCreation = reducer(undefined, createGame('number-game'));
    //         const stateAfterSecondGameCreation = reducer(stateAfterFirstGameCreation, createGame('word-game'));
    //
    //         expect(stateAfterSecondGameCreation.length).to.eq(2);
    //
    //         expect(stateAfterSecondGameCreation[0].type).to.eq('number-game');
    //         expect(stateAfterSecondGameCreation[0].isGameOver).to.be.false;
    //
    //         expect(stateAfterSecondGameCreation[1].type).to.eq('word-game');
    //         expect(stateAfterSecondGameCreation[1].isGameOver).to.be.false;
    //
    //     });
    // });
    // describe('number guess', () => {
    //     it('the input number is lower than the generated', () => {
    //         const gameState = [{
    //             type: 'number-game',
    //             id: 1,
    //             isGameOver: false,
    //             target: 5,
    //             moves: []
    //         }];
    //
    //         const stateAfterNumberGuess = reducer(gameState, onNumberSubmit(2, 1));
    //
    //         expect(stateAfterNumberGuess[0].isGameOver).to.be.false;
    //         expect(stateAfterNumberGuess[0].moves[0].number).to.eq(2);
    //         expect(stateAfterNumberGuess[0].moves[0].guess).to.eq('LT');
    //
    //     });
    //     it('the input number is greater than the generated', () => {
    //         const gameState = [{
    //             type: 'number-game',
    //             id: 1,
    //             isGameOver: false,
    //             target: 5,
    //             moves: []
    //         }];
    //
    //         const stateAfterNumberGuess = reducer(gameState, onNumberSubmit(6, 1));
    //
    //         expect(stateAfterNumberGuess[0].isGameOver).to.be.false;
    //         expect(stateAfterNumberGuess[0].moves[0].number).to.eq(6);
    //         expect(stateAfterNumberGuess[0].moves[0].guess).to.eq('GT');
    //     });
    //     it('the input number is equal to the generated and the game is finished', () => {
    //         const gameState = [{
    //             type: 'number-game',
    //             id: 1,
    //             isGameOver: false,
    //             target: 5,
    //             moves: []
    //         }];
    //
    //         const stateAfterNumberGuess = reducer(gameState, onNumberSubmit(5, 1));
    //
    //         expect(stateAfterNumberGuess[0].isGameOver).to.be.true;
    //         expect(stateAfterNumberGuess[0].moves[0].number).to.eq(5);
    //         expect(stateAfterNumberGuess[0].moves[0].guess).to.eq('EQ');
    //     });
    // });
    // describe('word guess', () => {
    //     it('guess function returns indexes of guessing word', () => {
    //         const gameState = [{
    //             type: 'word-game',
    //             id: 1,
    //             isGameOver: false,
    //             target: 'basil',
    //             moves: []
    //         }];
    //
    //         const stateAfterNumberGuess = reducer(gameState, onWordSubmit('bystl', 1));
    //
    //         expect(stateAfterNumberGuess[0].isGameOver).to.be.false;
    //         expect(stateAfterNumberGuess[0].moves[0].word).to.eq('bystl');
    //         expect(stateAfterNumberGuess[0].moves[0].matches).to.eql([0, 2, 4]);
    //     });
    //     it('the input word is equal to the generated and the game is finished', () => {
    //         const gameState = [{
    //             type: 'word-game',
    //             id: 1,
    //             isGameOver: false,
    //             target: 'basil',
    //             moves: []
    //         }];
    //
    //         const stateAfterNumberGuess = reducer(gameState, onWordSubmit('basil', 1));
    //
    //         expect(stateAfterNumberGuess[0].isGameOver).to.be.true;
    //         expect(stateAfterNumberGuess[0].moves[0].word).to.eq('basil');
    //         expect(stateAfterNumberGuess[0].moves[0].matches).to.eql([0,1,2,3,4]);
    //     });
    //
    // });
});