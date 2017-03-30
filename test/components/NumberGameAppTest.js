import React from 'react';
import {shallow} from 'enzyme';

import NumberGameApp from '../../src/components/NumberGameApp';
import GuessNumberForm from '../../src/containers/GuessNumberForm';
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

