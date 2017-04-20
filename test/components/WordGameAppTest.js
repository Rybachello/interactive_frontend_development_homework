import React from 'react';
import {shallow} from 'enzyme';
import WordGameApp from '../../src/components/WordGameApp';
import GuessWordForm from '../../src/components/GuessWordForm';
import WordHintList from '../../src/components/WordHintList';
describe('WordGameApp', () => {

    it('renders', () => {
        expect(shallow(<WordGameApp game={[]}/>)).to.exist;
    });
});


