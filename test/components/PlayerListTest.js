import React from 'react';
import {shallow} from 'enzyme';
import PlayersList from '../../src/components/PlayersList';
import Header from '../../src/components/Header';
describe('PlayersList', () => {
  const status_disconnected = 'disconnected';
  const status_connecting = 'connecting';
  const status_connected = 'connected';
  it('renders', () => {
    expect(shallow(
        <PlayersList/>,
    )).to.exist;
  });
  it('empty when status does not connected', () => {

    expect(shallow(<PlayersList status={status_disconnected}/>)).
        to.not.contain.descendants(Header);
    expect(shallow(<PlayersList status={status_connecting}/>)).
        to.not.contain.descendants(Header);
  });

  it(' renders list of players when connected', () => {
    const players = [
      {
        name: 'Mykola',
        id: '1',
      },
      {
        name: 'NoNo',
        id: '0',
      },
    ];
    const PlayerList = shallow(<PlayersList
        status={status_connected}
        players={players}
        playerId={'1'}
    />);
    expect(PlayerList).to.include.text('Mykola(you)');
    expect(PlayerList).to.include.text('NoNo');
    expect(PlayerList).to.contain.descendants(Header);
  });
  // it('renders no NumberHintList components without number hints', () => {
  //   expect(shallow(<NumberHintList moves={[]} />))
  //   .to.not.contain.descendants(NumberHint);
  // });
  //
  // it('renders NumberHint component for each number', () => {
  //   const hints = [
  //     {number:'8',guess:'LT'},
  //     {number:'9',type:'LT'}
  //   ];
  //
  //   const numberHintList = shallow(<NumberHintList moves={hints}/>);
  //
  //   expect(numberHintList).to.have.exactly(2).descendants(NumberHint);
  // });
});