import {
  connectPlayerSucceeded,
  connectPlayerRequested,
  disconnectPlayerSucceeded,
  playerIdRecieved,
  playersListRecieved,

} from '../../src/actions/index.js';

import reducer from '../../src/reducers/WebSocketReducer';
describe('game reducer', () => {
  const status_disconnected = 'disconnected';
  const status_connecting = 'connecting';
  const status_connected = 'connected';
  const initialState = {
    disconnectReason: null,
    playerId: '0',
    players: [],
    status: 'disconnected',

  };
  it('is empty initially', () => {
    expect(reducer(undefined, {})).
        to.
        eql(initialState);
  });
  it('set status to connecting when connectPlayerRequested', () => {
    expect(reducer(initialState, connectPlayerRequested('Mykola')).status).
        to.
        eql(status_connecting);
  });
  it('set status to connected when connectPlayerSucceeded', () => {
    expect(reducer(initialState, connectPlayerSucceeded()).status).
        to.
        eql(status_connected);
  });
  it('set id when playerIdRecieved', () => {
    const id = 'afaier-fafhas';
    expect(reducer(initialState, playerIdRecieved({playerId: id})).playerId).
        to.
        eql(id);
  });
  it('set players when playersListRecieved', () => {
    const players = [
      {
        name: 'Mykola',
        id: 'asdf',
      },
      {
        name: 'adf',
        id: 'f93',
      },
    ];
    expect(
        reducer(initialState, playersListRecieved({players: players})).players).
        to.
        eql({players});
  });
  it('set to initial state when disconnectPlayerSucceeded where reason is null', () => {
    expect(reducer(initialState, disconnectPlayerSucceeded({reason:null})).status).
        to.
        eql(status_disconnected);
  });
  it('set reason and disconnected status when disconnectPlayerSucceeded where reason is not null', () => {
    const reason = 'WRONG';
    expect(reducer(initialState, disconnectPlayerSucceeded({reason:reason})).disconnectReason).
        to.
        eql(reason);
    expect(reducer(initialState, disconnectPlayerSucceeded({reason:reason})).status).
         to.
         eql(status_disconnected);
  });
});

