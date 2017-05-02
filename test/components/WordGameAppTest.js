import React from 'react';
import {shallow} from 'enzyme';
import WordGameApp from '../../src/components/WordGameApp';
import GuessWordForm from '../../src/components/GuessWordForm';
import WordHintList from '../../src/components/WordHintList';

describe('Word Game App', () => {
  it('renders', () => {
    expect(shallow(
        <WordGameApp game={{status: 'finished', fetchState: {inFlight: false, error: undefined}, moves: [{}]}}/>
    )).to.exist;
  })
  it('shows you won when you won', () => {
    const wordGameAppComponent = shallow(
        <WordGameApp game={{status: 'finished', fetchState: {inFlight: false, error: undefined}, moves: [{}]}}/>
    );
    expect(wordGameAppComponent).to.include.text('You win!');
    expect(wordGameAppComponent).to.not.contain.descendants(GuessWordForm);
    expect(wordGameAppComponent).to.contain.descendants(WordHintList);

  });
  it('renders guess form when status is waiting for move', () => {
    const wordGameAppComponent = shallow(
        <WordGameApp game={{status: 'waiting_for_move', fetchState: {inFlight: false, error: undefined}, moves: [{}]}}/>
    );
    expect(wordGameAppComponent).to.contain.descendants(GuessWordForm);
    expect(wordGameAppComponent).to.contain.descendants(WordHintList);
  });
});