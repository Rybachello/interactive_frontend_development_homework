/**
 * Created by Rybachello on 3/16/2017.
 */
import Counter from '../src/Counter';

describe('Counter', () => {
    it('get counter', () => {
        expect(new Counter().getCounter()).to.eql(0);
    });
    it('increasing counter by 1', () => {
        let counter = new Counter();
        counter.increase();
        expect(counter.getCounter()).to.eql(1);
    });
});






