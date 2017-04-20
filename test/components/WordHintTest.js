import React from 'react';
import {shallow, render} from 'enzyme';
import WordHint from '../../src/components/WordHint';
describe('WordHint', () => {

    it('renders', () => {
        expect(shallow(
            <WordHint guess='test' letterMatches={[]}/>
        )).to.exist;
    });

    it('renders contained word text', () => {
        expect(shallow(
            <WordHint guess='test' letterMatches={[]}/>
        )).to.include.text('test');
    });
    it('letters are red color', () => {
        expect(shallow(
            <WordHint guess='test' letterMatches={[]}/>
        )).to.contain.descendants('.red');
    });

    it('letters are green color', () => {
        expect(shallow(
            <WordHint guess='test' letterMatches={[true, true, true, true]}/>
        )).to.contain.descendants('.green');
    });
});

