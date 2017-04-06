import React from 'react';
import {shallow, render} from 'enzyme';
import WordHint from '../../src/components/WordHint';
describe('WordHint', () => {

    it('renders', () => {
        expect(shallow(
            <WordHint word='test' matches={[]}/>
        )).to.exist;
    });

    it('renders contained word text', () => {
        expect(shallow(
            <WordHint word='test' matches={[]}/>
        )).to.include.text('test');
    });
    it('letters are red color', () => {
        expect(shallow(
            <WordHint word='test' matches={[]}/>
        )).to.contain.descendants('.red');
    });

    it('letters are green color', () => {
            expect(shallow(
                <WordHint word='test' matches={[0,1,2,3]}/>
            )).to.contain.descendants('.green');
        });
    });

