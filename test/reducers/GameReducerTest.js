import {
  createGamePostSucceeded,
  createGamePostRequested,
  createGamePostFailed,
  guessPostFailed,
  guessPostRequested,
  guessPostSucceeded,

} from '../../src/actions/index.js';

import reducer from '../../src/reducers/GameReducer';

describe('game reducer', () => {
  it('is empty initially', () => {
    expect(reducer(undefined, {})).
        to.
        eql({fetchState: {inFlight: false}, games: []});
  });

  it('send request to create game and flight is true', () => {
    expect(
        reducer(undefined, createGamePostRequested()),
    ).to.eql({fetchState: {inFlight: true}, games: []});
  });
  it('when request failed inFlight false', () => {
    expect(
        reducer(undefined, createGamePostFailed('error')).fetchState.inFlight,
    ).to.eql(false);
  });
  it('when request succeed inFlight false', () => {
    expect(
        reducer(undefined, createGamePostFailed('error')).fetchState.inFlight,
    ).to.eql(false);
  });
  describe('create game', () => {
    it('create word game when number game is created', () => {

      const stateAfterFirstGameCreation = reducer(undefined,
          createGamePostSucceeded(
              {
                fetchState: {
                  inFlight: false,
                },
                games: [
                  {type: 'guess_number'},
                ],
              }));
      const stateAfterSecondGameCreation = reducer(stateAfterFirstGameCreation,
          createGamePostSucceeded({
            fetchState: {
              inFlight: false,
            },
            games: [{type: 'guess_number'}],
          }));
      expect(stateAfterSecondGameCreation.games.length).to.eq(2);
    });
  });
  describe('number guess', () => {
    it('moves is empty', () => {
      expect(reducer(undefined, {})).
          to.
          eql({fetchState: {inFlight: false}, games: []});
    });
    it('send moves when guess post requested', () => {
      const stateAfterFirstGameCreation = reducer(undefined,
          createGamePostSucceeded(
              {
                games: [
                  {type: 'guess_number'},
                ],
              }));
      expect(
          reducer(stateAfterFirstGameCreation,
              guessPostRequested()).games[0].fetchState.inFlight,
      ).to.eql(true);
    });

  });
});
