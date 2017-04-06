import React from 'react';
import {shallow} from 'enzyme';
import App from '../../src/containers/App';
import GameList from '../../src/components/GameList';
describe('App', () => {

    it('renders', () => {
        expect(shallow(<App />)).to.exist;
    });

    it('initially renders empty Game list', () => {
        expect(
            shallow(<App />)
        ).to.contain(
            <GameList gameList={[]}/>
        );
    });

    it('create a new number game when pressed on Create Number Game button', () => {
        const app = shallow(<App />);

        app.find('.number-game-button').simulate('click');
        expect(
            app
        ).to.contain(
            <GameList gameList={[{type: 'number-game'}]}/>
        );
    });

    it('create a new word game when pressed on Create Word Game button', () => {
        const app = shallow(<App />);

        app.find('.word-game-button').simulate('click');

        expect(
            app
        ).to.contain(
            <GameList gameList={[{type: 'word-game'}]}/>
        );
    });

    it('has two buttons', () => {
        const app = shallow(<App />);
        expect(app).to.have.exactly(2).descendants('button');
    });
});

