import React from 'react';
import {shallow} from 'enzyme';
import NumberGameApp from '../../src/containers/NumberGameApp';
import GuessNumberForm from '../../src/components/GuessNumberForm';
import NumberHintList from '../../src/components/NumberHintList';
describe('NumberGameApp', () => {

    it('renders', () => {
        expect(shallow(<NumberGameApp />)).to.exist;
    });

    it('initially renders number hint list', () => {
        expect(
            shallow(<NumberGameApp />)
        ).to.contain(
            <NumberHintList hints={[]}/>
        );
    });

    it('initially renders guess number form', () => {
        expect(
            shallow(<NumberGameApp />)
        ).to.contain.descendants(
            GuessNumberForm
        );
    });
});

