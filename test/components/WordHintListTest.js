import React from 'react';
import {shallow} from 'enzyme';

import WordHintList from '../../src/components/WordHintList';
import WordHint from '../../src/components/WordHint';

describe('WordHintList', () => {

    it('renders', () => {
        expect(shallow(
            <WordHintList hints={[]}/>
        )).to.exist;
    });

    it('renders WordHintList components without word hints', () => {
        expect(shallow(<WordHintList hints={[]}/>))
            .to.not.contain.descendants(WordHint);
    });

    it('renders WordHint component for each word', () => {
        const hints = [
            {word: 'test1', matches: []},
            {word: 'test2', matches: []}
        ];

        const wordHintList = shallow(<WordHintList hints={hints}/>);

        expect(wordHintList).to.have.exactly(2).descendants(WordHint);
    });
});
