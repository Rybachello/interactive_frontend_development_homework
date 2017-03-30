import React from 'react';
import {shallow, render} from 'enzyme';

import NumberHint from '../../src/components/NumberHint';
describe('NumberHint', () => {
    // For simple presentational components just smoke-testing that rendering
    // succeeds is sufficient. If there is logic in the component, further
    // testing is required.
    it('renders', () => {
        expect(shallow(
            <NumberHint guess='3:was under than target' type='incorrect'/>
        )).to.exist;
    });

    // It is useful to test that containment works as expected.
    it('renders contained guess text', () => {
        expect(shallow(
            <NumberHint guess='3:was under than target' type='incorrect'/>
        )).to.include.text('3:was under than target');
    });
    it('number hit element is with red color',() => {
        expect(shallow(
            <NumberHint guess='3:was under than target' type='incorrect'/>
            )).to.contain.descendants('.red');
    });
    it('number hit element is with green color',() => {
        expect(shallow(
            <NumberHint guess='3:was under than target' type='correct'/>
        )).to.contain.descendants('.green');
    });
});
