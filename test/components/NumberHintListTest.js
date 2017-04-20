import React from 'react';
import {shallow} from 'enzyme';
import NumberHintList from '../../src/components/NumberHintList';
import NumberHint from '../../src/components/NumberHint';
describe('NumberHintList', () => {

    // it('renders', () => {
    //     expect(shallow(
    //         <NumberHintList moves={[]}/>
    //     )).to.exist;
    // });
    //
    // it('renders no NumberHintList components without number hints', () => {
    //     expect(shallow(<NumberHintList moves={[]} />))
    //         .to.not.contain.descendants(NumberHint);
    // });
    //
    // it('renders NumberHint component for each number', () => {
    //     const hints = [
    //         {number:'8',guess:'LT'},
    //         {number:'9',type:'LT'}
    //     ];
    //
    //     const numberHintList = shallow(<NumberHintList moves={hints}/>);
    //
    //     expect(numberHintList).to.have.exactly(2).descendants(NumberHint);
    // });
});