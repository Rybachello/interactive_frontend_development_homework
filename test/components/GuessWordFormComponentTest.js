import React from 'react';
import {shallow} from 'enzyme';
import GuessWordForm from '../../src/components/GuessWordFormComponent';
describe('GuessWordForm', () => {
  it('renders', () => {
    expect(shallow(
        <GuessWordForm fetchState={{inFlight: true, error: {}}}
                       onSubmit={sinon.stub()}/>,
    )).to.exist;
  });

  it('has one input and header', () => {
    const guessWordForm = shallow(<GuessWordForm
        fetchState={{inFlight: false, error: {}}} onSubmit={sinon.stub()}/>);
    expect(guessWordForm).
        to.
        contain(<font size='4'>Guess a five letter word</font>);
    expect(guessWordForm).to.have.exactly(1).descendants('input');

  });
  it('calls submit with number and submit button clicked', () => {
    const onSubmit = sinon.stub();
    const form = shallow(<GuessWordForm
        fetchState={{inFlight: false, error: {}}} onSubmit={onSubmit}/>);

    form.setState({word: 'basil'});
    form.find('input').
        simulate('keyUp', {key: 'Enter', keyCode: 13, which: 13});
    expect(onSubmit).to.have.been.calledWith('basil');
  });

  it('clears state when submit button clicked', () => {
    const form = shallow(<GuessWordForm
        fetchState={{inFlight: false, error: {}}} onSubmit={sinon.stub()}/>);

    form.setState({word: 'basil'});
    form.find('input').
        simulate('keyUp', {key: 'Enter', keyCode: 13, which: 13});
    expect(form.state()).to.eql({word: ''});
  });
  it('renders the error when error occurs', () => {
    const form = shallow(<GuessWordForm
        fetchState={{inFlight: false, error: {error: 'Some Error'}}}
        onSubmit={sinon.stub()} text='0'/>);
    expect(form).to.contain(<h4>Some Error</h4>);
  });
  it('renders the loading when request is on fly', () => {
    const form = shallow(<GuessWordForm fetchState={{inFlight: true, error: {}}}
                                        onSubmit={sinon.stub()}/>);
    expect(form).to.contain(<h2>Loading...</h2>);
  });
});

