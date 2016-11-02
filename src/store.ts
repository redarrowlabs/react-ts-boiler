import {
    createStore,
    combineReducers,
    applyMiddleware,
    compose,
} from 'redux';

import thunk from 'redux-thunk';

import {
    introReducer,
    Introduction,
    initialState as introInitialState,
} from './introduction/intro.duck';

//===========
// Interface
//===========
export interface StoreShape {
    intro: Introduction;
}

function initialState(): StoreShape {
    return {
        intro: introInitialState(),
    };
}

//==========
// Reducers
//==========
const allReducers = {
    intro: introReducer,
};

export const rootReducer = combineReducers<StoreShape>(allReducers);

function makeStore() {
    const win = typeof window !== 'undefined' ? window as any : {};
    const composeEnhancers = win.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const state = initialState();

    return createStore<StoreShape>(rootReducer, state,
        composeEnhancers(
            applyMiddleware(thunk)
        )
    );
}

export const Store = makeStore();
export type GetState = () => StoreShape;
