/**
 * Created by Rybachello on 3/23/2017.
 */
import NumberGame from '../src/NumberGame';
describe('Game number Test', () => {
    it('game generate a random number between 0 and 9', () => {
        let game = new NumberGame(0);
        game.generateNumber(0, 9);
        expect(game.getGeneratedNumber()).to.be.within(0, 9)
    });
    it('the input number is lower than the generated', () => {
        let game = new NumberGame(4);
        let inputNumber = 2;
        expect(game.guess(inputNumber)).be.equal(`${inputNumber}:was under than target`);
    });
    it('the input number is greater than the generated', () => {
        let game = new NumberGame(4);
        let inputNumber = 7;
        expect(game.guess(inputNumber)).be.equal(`${inputNumber}:was greater than target`);
    });
    it('the input number is equal to the generated and the game is finished', () => {
        let game = new NumberGame(4);
        let inputNumber = 4;
        expect(game.guess(inputNumber)).be.equal(`${inputNumber}:was correct`);
        expect(game.getIsOverGame()).be.true;
    });
});