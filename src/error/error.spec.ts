import { rootReducer, initialState } from '../store';
import { UNEXPECTED_ERROR, CLOSE_ERROR_DIALOG } from './error.duck';

describe('unexpected error handler', () => {
    it('reports problems', () => {
        const prev = initialState();
        const action = {
            type: UNEXPECTED_ERROR,
            payload: { stack: 'at error\nat error\nat error' },
        };
        const state = rootReducer(prev, action);
        const expected = {
            isOpen: true,
            stack: 'at error<br/>at error<br/>at error',
        };
        state.error.should.deep.equal(expected);
    });

    it('closes modal', () => {
        const prev = initialState();
        prev.error.isOpen = true;
        prev.error.stack = 'at error<br/>at error<br/>at error';

        const action = {
            type: CLOSE_ERROR_DIALOG,
        };

        const state = rootReducer(prev, action);
        const expected = {
            isOpen: false,
            stack: '',
        };

        state.error.should.deep.equal(expected);
    });
});
