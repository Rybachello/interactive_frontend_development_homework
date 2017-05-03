import React from 'react';
import {shallow} from 'enzyme';
import GameCreation from '../../src/components/GameCreationComponent';
import Header from '../../src/components/HeaderComponent';

describe('GameCreation', () => {
  it('renders', () => {
    expect(shallow(
        <GameCreation status='connected'/>,
    )).to.exist;
  });
  it('renders Loading when inFlight is true ', () => {
    const gameCreationComponent = shallow(<GameCreation status='connected'
                                                        createGame={undefined}
                                                        inFlight={true}/>);
    expect(gameCreationComponent).
        to.
        contain(<Header text='Create a game!'/>);
    expect(gameCreationComponent).
        to.
        contain(<h2>Loading...</h2>);
  });
  it('renders buttons when inFlight is false ', () => {
    const gameCreationComponent = shallow(<GameCreation status='connected'
                                                     createGame={undefined}
                                                        inFlight={false}
                                                        error='some error'/>);
    expect(gameCreationComponent).to.have.exactly(2).descendants('button');
    expect(gameCreationComponent).to.contain.descendants('.number-game-button');
    expect(gameCreationComponent).to.contain.descendants('.word-game-button');
    expect(gameCreationComponent).
        to.
        contain(<h2>some error</h2>);
  });
});


