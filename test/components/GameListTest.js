import React from 'react';
import {shallow} from 'enzyme';
import GameList from '../../src/components/GameList';
import NumberGameApp from '../../src/components/NumberGameApp';
import WordGameApp from '../../src/components/WordGameApp';

describe('GameList', () => {
    it('renders', () => {
        expect(shallow(
            <GameList games={[]}/>
        )).to.exist;
    })
    it('renders number game when game type is number-game', () => {
        const gameList = shallow(<GameList games={[{type:'guess_number'}] }/>);
        expect(gameList).to.contain.descendants(NumberGameApp);
    });
    it('renders word game when game type is word-game', () => {
        const gameList = shallow(<GameList games={[{type:'guess_word'}]}/>);
        expect(gameList).to.contain.descendants(WordGameApp);
    });

});
