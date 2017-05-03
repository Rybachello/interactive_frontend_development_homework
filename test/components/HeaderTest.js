import React from 'react';
import {shallow} from 'enzyme';

import Header from '../../src/components/HeaderComponent';

describe('Header', () => {
  it('renders', () => {
    const wrapper = shallow(<Header text='Simple Header'/>);
    expect(wrapper).to.exist;
  });
  it('render with the appropriate text', () => {
    expect(shallow(<Header text='Simple Header'/>
    )).to.include.text('Simple Header');
  });
});

