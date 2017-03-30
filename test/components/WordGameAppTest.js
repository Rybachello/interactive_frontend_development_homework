import React from 'react';
import {shallow} from 'enzyme';

import WordGameApp from '../../src/components/WordGameApp';
import GuessWordForm from '../../src/containers/GuessWordForm';
import WordHintList from '../../src/components/WordHintList';

describe('WordGameApp', () => {

    it('renders', () => {
        expect(shallow(<WordGameApp />)).to.exist;
    });

    it('initially renders number hint list', () => {
        expect(
            shallow(<WordGameApp />)
        ).to.contain(
            <WordHintList hints={[]}/>
        );
    });

    it('initially renders guess word form', () => {
        expect(
            shallow(<WordGameApp />)
        ).to.contain.descendants(
            GuessWordForm
        );
    });

});


