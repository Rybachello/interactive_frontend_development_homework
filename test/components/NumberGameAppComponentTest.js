import React from 'react';
import {shallow} from 'enzyme';
import NumberGameApp from '../../src/components/NumberGameAppComponent';
import GuessNumberForm from '../../src/components/GuessNumberFormComponent';
import NumberHintList from '../../src/components/NumberHintListComponent';

describe('Number Game App', () => {
  it('renders', () => {
    expect(shallow(
        <NumberGameApp game={{status: 'finished', fetchState: {inFlight: false, error: undefined}, moves: []}}/>
    )).to.exist;
  });
  it('shows you won when you won', () => {
    const numberGameAppComponent = shallow(
        <NumberGameApp game={{status: 'finished', fetchState: {inFlight: false, error: undefined}, moves: [{}]}}/>
    );
    expect(numberGameAppComponent).to.include.text('You win');
    expect(numberGameAppComponent).to.not.contain.descendants(GuessNumberForm);
    expect(numberGameAppComponent).to.contain.descendants(NumberHintList);

  });
  it('renders guess form when status is waiting for move', () => {
    const numberGameAppComponent = shallow(
        <NumberGameApp game={{status: 'waiting_for_move', fetchState: {inFlight: false, error: undefined}, moves: [{}]}}/>
    );
    expect(numberGameAppComponent).to.contain.descendants(GuessNumberForm);
    expect(numberGameAppComponent).to.contain.descendants(NumberHintList);
  });
});
