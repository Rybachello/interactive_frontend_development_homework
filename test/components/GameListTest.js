import React from 'react';
import {shallow} from 'enzyme';
import GameList from '../../src/components/GameList';
import NumberGameApp from '../../src/containers/NumberGameApp';
import WordGameApp from '../../src/containers/WordGameApp';

describe('GameList', () => {
    it('renders', () => {
        expect(shallow(
            <GameList gameList={[]}/>
        )).to.exist;
    })
    it('renders number game when game type is number-game', () => {
        const gameList = shallow(<GameList gameList={[{type:'number-game'}]}/>);
        expect(gameList).to.contain.descendants(NumberGameApp);
    });
    it('renders word game when game type is word-game', () => {
        const gameList = shallow(<GameList gameList={[{type:'word-game'}]}/>);
        expect(gameList).to.contain.descendants(WordGameApp);
    });

});
