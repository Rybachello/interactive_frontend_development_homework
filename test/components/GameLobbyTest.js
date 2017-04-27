import React from 'react';
import {shallow, render} from 'enzyme';
import GameLobby from '../../src/components/GameLobby';
import LoggingComponent from '../../src/components/LoggingComponent';
import Header from '../../src/components/Header';
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


