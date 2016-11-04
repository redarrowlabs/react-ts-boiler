//============
// Interfaces
//============
import { doop, field } from 'doop';

@doop
export class Introduction {
    @doop
    get myProperty() { return field<string, this>('not clicked'); }
}

//=========
// Reducer
//=========
export const initialState = new Introduction();

//TODO typed actions
export function introReducer(prev = initialState, action: any): Introduction {
    switch (action.type) {
        case TEST_REDUX: {
            return prev.myProperty('clicked');
        }
        default: return prev;
    }
}

//=========
// Actions
//=========
export const TEST_REDUX = 'redarrowlabs/intro/TEST_REDUX';

//=================
// Action Creators
//=================
export function doActionOne() {
    return {
        type: TEST_REDUX,
    };
}
