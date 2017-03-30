import React from 'react';
import {shallow} from 'enzyme';
import GameList from '../../src/components/GameList';

describe('GameList', () => {
    it('renders', () => {
        expect(shallow(
            <GameList gameList={[]}/>
        )).to.exist;
    });
});
