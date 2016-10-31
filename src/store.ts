import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { featureOneReducer, FeatureOne, initialState as f1InitialState } from './example.duck'
import thunk from 'redux-thunk';

export interface StoreShape {
    featureOne: FeatureOne
}

const allReducers = {
    featureOne: featureOneReducer
}

export const rootReducer = combineReducers<StoreShape>(allReducers);

function initialState(): StoreShape {
    return {
        featureOne: f1InitialState()
    }
}

function makeStore() {
    const win = window as any;
    const composeEnhancers = win.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const state = initialState();

    return createStore<StoreShape>(rootReducer, state,
        composeEnhancers(
            applyMiddleware(thunk)
        )
    )
}

export const Store = makeStore();
export type GetState = () => StoreShape; 