import { rootReducer, initialState } from '../store';
import { TEST_REDUX } from './intro.duck';

describe('introduction', () => {
    it('demos redux', () => {
        const prev = initialState();
        const action = { type: TEST_REDUX };
        const next = rootReducer(prev, action);
        const expected = { intro: { myProperty: 'clicked' } };

        next.intro.should.deep.equal(expected.intro);
    });
});
