import React from 'react';
import {shallow, render} from 'enzyme';

import NumberHint from '../../src/components/NumberHint';
describe('NumberHint', () => {
    it('renders', () => {
        expect(shallow(
            <NumberHint comparedToAnswer='3:was under than target' type='incorrect'/>
        )).to.exist;
    });
    it('renders contained guess text', () => {
        expect(shallow(
            <NumberHint comparedToAnswer='LT' guess='3'/>
        )).to.include.text('3: was lower than target');
    });
    it('number hit element is with red color',() => {
        expect(shallow(
            <NumberHint comparedToAnswer='LT' guess='3'/>
            )).to.contain.descendants('.red');
    });
    it('number hit element is with green color',() => {
        expect(shallow(
            <NumberHint comparedToAnswer='EQ' guess='3'/>
        )).to.contain.descendants('.green');
    });
});
