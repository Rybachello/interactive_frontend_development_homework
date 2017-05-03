import React from 'react';
import {shallow} from 'enzyme';
import GameList from '../../src/components/GameListComponent';
import {Link} from 'react-router-dom';
describe('GameList', () => {
  it('renders', () => {
    expect(shallow(
        <GameList games={[]} location={undefined}/>,
    )).to.exist;
  });
  it('renders links when the location.pathname is /ongoingGames and status is not finished',
      () => {
        const games = [
          {
            id: '3',
            type: 'guess_number',
            status: 'waiting_for_move',
          },
          {
            id: '4',
            type: 'guess_word',
            status: 'finished',
          },
        ];

        const gameList = shallow(<GameList games={games} location= {{pathname:'/ongoingGames'}} />);
        expect(gameList).to.have.exactly(1).descendants(Link);
        expect(gameList).
            to.
            contain(<Link to='/games/3'>guess_number, waiting_for_move</Link>);

      });
  it('renders links when the location.pathname is /finishedGames and status is finished',
      () => {
        const games = [
          {
            id: '3',
            type: 'guess_number',
            status: 'waiting_for_move',
          },
          {
            id: '4',
            type: 'guess_word',
            status: 'finished',
          },
        ];

        const gameList = shallow(<GameList games={games} location= {{pathname:'/finishedGames'}} />);
        expect(gameList).to.have.exactly(1).descendants(Link);
        expect(gameList).
            to.
            contain(<Link to='/games/4'>guess_word, finished</Link>);

      });
});
