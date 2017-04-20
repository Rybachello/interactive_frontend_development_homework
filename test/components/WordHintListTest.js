import React from 'react';
import {shallow} from 'enzyme';
import WordHintList from '../../src/components/WordHintList';
import WordHint from '../../src/components/WordHint';
describe('WordHintList', () => {

    it('renders', () => {
        expect(shallow(
            <WordHintList moves={[]}/>
        )).to.exist;
    });

    it('renders WordHintList components without word hints', () => {
        expect(shallow(<WordHintList moves={[]}/>))
            .to.not.contain.descendants(WordHint);
    });

    it('renders WordHint component for each word', () => {
        const moves = [
            {guess: 'test1', letterMatches: []},
            {guess: 'test2', letterMatches: []}
        ];
        const wordHintList = shallow(<WordHintList moves={moves}/>);
        expect(wordHintList).to.have.exactly(2).descendants(WordHint);
    });
});
