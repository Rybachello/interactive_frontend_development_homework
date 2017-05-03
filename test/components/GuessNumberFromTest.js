import React from 'react';
import {shallow} from 'enzyme';
import GuessNumberForm from '../../src/components/GuessNumberFormComponent';
describe('GuessNumberForm', () => {
  it('renders', () => {
    expect(shallow(
        <GuessNumberForm fetchState={{inFlight: true, error: ''}}
                         onSubmit={sinon.stub()} text='text'/>,
    )).to.exist;
  });

  it('has one input and header', () => {
    const guessNumberForm = shallow(<GuessNumberForm
        fetchState={{inFlight: false, error: {}}} onSubmit={sinon.stub()}/>);
    expect(guessNumberForm).
        to.
        contain(<font size='4'>Guess a number from 0 to 9</font>);
    expect(guessNumberForm).to.have.exactly(1).descendants('input');
  });

  it('calls submit with number and submit button clicked', () => {
    const onSubmit = sinon.stub();
    const form = shallow(<GuessNumberForm
        fetchState={{inFlight: false, error: {}}} onSubmit={onSubmit}/>);

    form.setState({number: '0'});

    form.find('input').
        simulate('keyUp', {key: 'Enter', keyCode: 13, which: 13});
    expect(onSubmit).to.have.been.calledWith(0);
  });

  it('clears state when submit button clicked', () => {
    const form = shallow(<GuessNumberForm
        fetchState={{inFlight: false, error: {}}} onSubmit={sinon.stub()}
        text='0'/>);

    form.setState({number: '0'});
    form.find('input').
        simulate('keyUp', {key: 'Enter', keyCode: 13, which: 13});
    expect(form.state()).to.eql({number: ''});
  });
  it('render the error when error occurs', () => {
    const form = shallow(<GuessNumberForm
        fetchState={{inFlight: false, error: {error: 'Some Error'}}}
        onSubmit={sinon.stub()} text='0'/>);
    expect(form).to.contain(<h4>Some Error</h4>);
  });
  it('renders the loading when request is on fly', () => {
    const form = shallow(<GuessNumberForm fetchState={{inFlight: true, error: {}}}
                                        onSubmit={sinon.stub()}/>);
    expect(form).to.contain(<h2>Loading...</h2>);
  });
});

