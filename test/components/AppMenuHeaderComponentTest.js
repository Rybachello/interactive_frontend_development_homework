import React from 'react';
import {shallow} from 'enzyme';
import MenuHeader from '../../src/components/AppMenuHeaderComponent';
import {Link} from 'react-router-dom';

describe('AppMenuHeader', () => {
  it('renders', () => {
    expect(shallow(
        <MenuHeader status='connected'/>,
    )).to.exist;
  });
  it('renders links when status is connected', () => {
    const menuHeaderComponent = shallow(<MenuHeader status='connected'/>);
    expect(menuHeaderComponent).to.have.exactly(4).descendants(Link);
    expect(menuHeaderComponent).
        to.
        contain(<Link to="/createGame">Create Game</Link>);
    expect(menuHeaderComponent).
        to.
        contain(<Link to="/players">Online Players</Link>);
    expect(menuHeaderComponent).
        to.
        contain(<Link to="/ongoingGames">Ongoing games</Link>);
    expect(menuHeaderComponent).
        to.
        contain(<Link to="/finishedGames">Finished games</Link>);
  });
  it('is empty when status is not connected', () => {
    const menuHeaderComponent = shallow(<MenuHeader status='disconnected'/>);
    expect(menuHeaderComponent).to.not.contain.descendants(Link);
  });
});

