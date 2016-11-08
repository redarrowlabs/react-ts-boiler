import {
    createStore,
    combineReducers,
    applyMiddleware,
    compose,
} from 'redux';

import thunk from 'redux-thunk';
import { routerReducer } from 'react-router-redux';
import { getWindow } from './window';

import {
    introReducer,
    Introduction,
    initialState as introInitialState,
} from './introduction/intro.duck';

import {
    errorReducer,
    UnexpectedError,
    initialState as errorInitialState,
} from './error/error.duck';

//===========
// Interface
//===========
export interface StoreShape {
    intro: Introduction;
    error: UnexpectedError;
    routing: any; //react-router-redux implements this
}

export function initialState(): StoreShape {
    return {
        intro: introInitialState,
        error: errorInitialState,
        routing: undefined,
    };
}

//==========
// Reducers
//==========
const allReducers = {
    intro: introReducer,
    routing: routerReducer,
    error: errorReducer,
};

export const rootReducer = combineReducers<StoreShape>(allReducers);

function makeStore() {
    const win = getWindow();
    const composeEnhancers = win.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const state = initialState();
    const enhancers = composeEnhancers(applyMiddleware(thunk));

    return createStore<StoreShape>(
        rootReducer,
        state,
        enhancers
    );
}

export const Store = makeStore();
export type GetState = () => StoreShape;

/**
 * Turn a complex model into a plain old javascript object.
 */
export function toJS(target: Object) {
    return JSON.parse(JSON.stringify(target));
}
