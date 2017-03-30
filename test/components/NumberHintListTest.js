import React from 'react';
import {shallow} from 'enzyme';

import NumberHintList from '../../src/components/NumberHintList';
import NumberHint from '../../src/components/NumberHint';

describe('NumberHintList', () => {

    it('renders', () => {
        expect(shallow(
            <NumberHintList hints={[]}/>
        )).to.exist;
    });

    it('renders no NumberHintList components without number hints', () => {
        expect(shallow(<NumberHintList hints={[]} />))
            .to.not.contain.descendants(NumberHint);
    });

    it('renders numberHint component for each comment', () => {
        const hints = [
            {guess:'3 was under than target',type:'incorrect'},
            {guess:'4 was under than target',type:'correct'}
        ];

        const numberHintList = shallow(<NumberHintList hints={hints}/>);

        expect(numberHintList).to.have.exactly(2).descendants(NumberHint);
    });
});