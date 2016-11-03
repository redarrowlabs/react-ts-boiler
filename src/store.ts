import {
    createStore,
    combineReducers,
    applyMiddleware,
    compose,
} from 'redux';

import thunk from 'redux-thunk';
import { routerReducer } from 'react-router-redux';

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
    routing: any; //react-router-redux implements this
}

export function initialState(): StoreShape {
    return {
        intro: introInitialState(),
        routing: undefined,
    };
}

//==========
// Reducers
//==========
const allReducers = {
    intro: introReducer,
    routing: routerReducer,
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
