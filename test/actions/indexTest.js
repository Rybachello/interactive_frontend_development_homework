import {createGame} from '../../src/actions/index';
describe('actions:', () => {
    describe('game created', () => {

        it('has increasing game ID', () => {
            const numberGameType = 'number-game';
            const wordGameType = 'word-game';
            const createdGame = [
                createGame(numberGameType),
                createGame(wordGameType)
            ];
            expect(createdGame[1].payload.id).to.eq(
                createdGame[0].payload.id + 1
            );
        });
        it('number game: has appropriate type ', () => {
            const numberGameType = 'number-game';
            const wordGameType = 'word-game';
            const createdGame = [
                createGame(numberGameType),
                createGame(wordGameType)
            ];
            expect(createdGame[0].payload.type).to.eq(numberGameType);
            expect(createdGame[1].payload.type).to.eq(wordGameType);
        });
        it('number game: isGameOver is false ', () => {
            const numberGameType = 'number-game';
            const createdGame = createGame(numberGameType);

            expect(createdGame.payload.isGameOver).to.be.false;
        });
        it('word game: isGameOver is false ', () => {
            const wordGameType = 'word-game';
            const createdGame = createGame(wordGameType);
            expect(createdGame.payload.isGameOver).to.be.false;
        });
        it('number game: generate target value', () => {
            const numberGameType = 'number-game';
            const createdGame = createGame(numberGameType);
            expect(createdGame.payload.target).to.be.within(0, 9);
        });
        it('word game: generate target value', () =>{
            const words = ['paper', 'grill', 'basil', 'hinge', 'ruler'];
            const wordGameType = 'word-game';
            const createdGame = createGame(wordGameType);
            expect(words).to.include(createdGame.payload.target);
        });
    });
});
