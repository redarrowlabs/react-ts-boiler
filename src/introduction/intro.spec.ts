import { rootReducer } from '../store';
import { TEST_REDUX } from './intro.duck';

describe('introduction', () => {
    it('demos redux', () => {
        const prev = { intro: { myProperty: 'not clicked' } };
        const action = { type: TEST_REDUX };
        const next = rootReducer(prev, action);
        const expected = { intro: { myProperty: 'clicked' } };
        next.should.deep.equal(expected);
    });
});
