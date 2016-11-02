//============
// Interfaces
//============
export interface FeatureName {
    myProperty: string;
}

//=========
// Reducer
//=========
export function initialState(): FeatureName {
    return {
        myProperty: 'not clicked',
    };
}

//TODO typed actions
export function featureNameReducer(prev = initialState(), action: any) {
    switch (action.type) {
        case TEST_REDUX: {
            return {
                myProperty: 'clicked',
            };
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
