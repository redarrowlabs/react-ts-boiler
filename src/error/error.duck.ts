//============
// Interfaces
//============
export interface UnexpectedError {
    isOpen: boolean;
    stack: string;
}
//=========
// Reducer
//=========
export const initialState = { isOpen: false, stack: '' };

//TODO typed actions
export function errorReducer(prev = initialState, action: any): UnexpectedError {
    switch (action.type) {

        case UNEXPECTED_ERROR: {
            const payload = action.payload as Error;
            const formattedStack = payload.stack.split('\n').join('<br/>');
            return {
                isOpen: true,
                stack: formattedStack,
            };
        }
        case CLOSE_ERROR_DIALOG: {
            return {
                isOpen: false,
                stack: '',
            };
        }
        default: return prev;
    }
}

//=========
// Actions
//=========
export const UNEXPECTED_ERROR = 'redarrowlabs/error/UNEXPECTED_ERROR';
export const CLOSE_ERROR_DIALOG = 'redarrowlabs/error/CLOSE_ERROR_DIALOG';

//=================
// Action Creators
//=================
export function unexpectedError(data: Error) {
    return {
        type: UNEXPECTED_ERROR,
        payload: data,
    };
}

export function closeErrorDialog() {
    return {
        type: CLOSE_ERROR_DIALOG,
    };
}
