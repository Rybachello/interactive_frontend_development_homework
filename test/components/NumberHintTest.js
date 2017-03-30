// import React from 'react';
// import {shallow, render} from 'enzyme';
//
// import NumberHint from '../../components/NumberHint';
//
// describe('WordHint', () => {
//     // For simple presentational components just smoke-testing that rendering
//     // succeeds is sufficient. If there is logic in the component, further
//     // testing is required.
//     it('renders', () => {
//         expect(shallow(
//             <NumberHint author='author'>text</NumberHint>
//         )).to.exist;
//     });
//
//     // It is useful to test that containment works as expected.
//     it('renders contained element', () => {
//         expect(shallow(
//             <Comment author='author'>contained</Comment>
//         )).to.include.text('contained');
//     });
//
//     // How useful is this test?
//     //
//     // It is way too specific.
//     // The presentational component cannot be changed in any way without changing the test
//     it('renders div with comment class and h3 with author and contained text', () => {
//         expect(
//             render(<Comment author='author'>contained</Comment>).html()
//         ).to.eql('<div class="comment"><h3 class="comment-author">author said:</h3>contained</div>');
//     });
// });
//
