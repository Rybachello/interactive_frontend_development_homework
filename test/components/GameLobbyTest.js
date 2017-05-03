import React from 'react';
import {shallow, render} from 'enzyme';
import GameLobby from '../../src/components/GameLobbyComponent';
import LoggingComponent from '../../src/components/LoggingComponent';
import Header from '../../src/components/HeaderComponent';
describe('GameLobby', () => {

  it('renders', () => {
    expect(shallow(
        <GameLobby/>,
    )).to.exist;
  });
  it('renders with Logging Component and Header', () => {
    expect(shallow(<GameLobby/>))
    .to.contain.descendants(Header);
    expect(shallow(<GameLobby/>))
    .to.contain.descendants(LoggingComponent);
  });
});


