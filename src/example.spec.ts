import { rootReducer } from './store';

describe('example', () => {
    it('greets you', () => {
        const prev = { featureOne: { greet: 'World', answer: 0 } };
        const action = { type: 'redarrowlabs/BUTTON_CLICK' };
        const state = rootReducer(prev, action);
        const expected = { featureOne: { greet: 'Red Arrow', answer: 0 } };
        state.should.deep.equal(expected);
    });
});
