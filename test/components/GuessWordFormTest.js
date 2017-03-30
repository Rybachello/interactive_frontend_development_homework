import React from 'react';
import {shallow} from 'enzyme';
import GuessWordForm from '../../src/containers/GuessWordForm';

describe('GuessWordForm', () => {
    it('renders', () => {
        expect(shallow(
            <GuessWordForm onSubmit={sinon.stub()} text='text' />
        )).to.exist;
    });


    it('has one input and header', () => {
        const guessWordForm = shallow(<GuessWordForm onSubmit={sinon.stub()} text='text' />);

        expect(guessWordForm).to.contain(<font size ='4'>Guess a five letter word</font>);

        expect(guessWordForm).to.have.exactly(1).descendants('input');

    });
    it('calls submit with number and submit button clicked', () => {
        const onSubmit = sinon.stub();
        const form = shallow(<GuessWordForm onSubmit={onSubmit} text='basil' />);

        form.setState({word:'basil'});

        form.find('input').simulate('keyUp', { key: 'Enter', keyCode: 13, which: 13 });
        expect(onSubmit).to.have.been.calledWith('basil');
    });



    it('clears state when submit button clicked', () => {
        const form = shallow(<GuessWordForm onSubmit={sinon.stub()} text='basil' />);

        form.setState({word:'basil'});
        form.find('input').simulate('keyUp', { key: 'Enter', keyCode: 13, which: 13 });
        expect(form.state()).to.eql({word:''});
    });
});

