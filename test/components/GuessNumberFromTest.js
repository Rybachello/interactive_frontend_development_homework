import React from 'react';
import {shallow} from 'enzyme';
import GuessNumberForm from '../../src/components/GuessNumberForm';
describe('GuessNumberForm', () => {
    // it('renders', () => {
    //     expect(shallow(
    //         <GuessNumberForm onSubmit={sinon.stub()} text='text'/>
    //     )).to.exist;
    // });
    //
    // it('has one input and header', () => {
    //     const guessNumberForm = shallow(<GuessNumberForm onSubmit={sinon.stub()} text='text'/>);
    //     expect(guessNumberForm).to.contain(<font size='4'>Guess a number from 0 to 9</font>);
    //     expect(guessNumberForm).to.have.exactly(1).descendants('input');
    // });
    //
    // it('calls submit with number and submit button clicked', () => {
    //     const onSubmit = sinon.stub();
    //     const form = shallow(<GuessNumberForm onSubmit={onSubmit} text='0'/>);
    //
    //     form.setState({number: '0'});
    //
    //     form.find('input').simulate('keyUp', {key: 'Enter', keyCode: 13, which: 13});
    //     expect(onSubmit).to.have.been.calledWith('0');
    // });
    //
    // it('clears state when submit button clicked', () => {
    //     const form = shallow(<GuessNumberForm onSubmit={sinon.stub()} text='0'/>);
    //
    //     form.setState({number: '0'});
    //     form.find('input').simulate('keyUp', {key: 'Enter', keyCode: 13, which: 13});
    //     expect(form.state()).to.eql({number: ''});
    // });
});

