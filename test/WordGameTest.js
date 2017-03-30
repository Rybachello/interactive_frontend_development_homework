/**
 * Created by Rybachello on 3/26/2017.
 */
import WordGame from '../src/WordGame';
describe('Game Word Test', () => {
    it('game generate a random word from', () => {
        let game = new WordGame('basil');
        let words = ['paper', 'grill', 'basil', 'hinge', 'ruler'];
        game.generateWord();
        expect(words).to.include(game.getGeneratedWord());
    });

     it('guess function returns indexes of guessing word', () => {
         let game = new WordGame('basil');
         let inputWord = 'bystl';
         expect(game.guess(inputWord)).be.eql([0,2,4]);
     });

     it('the input word is equal to the generated and the game is finished', () => {
         let game = new WordGame('basil');
         game.guess('basil');
         expect(game.getIsOverGame()).be.true;
     });
});