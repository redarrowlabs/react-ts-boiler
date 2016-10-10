import { createStore, combineReducers } from 'redux'
import { featureOneReducer, FeatureOne } from './example.duck'

export interface StoreShape {
    featureOne: FeatureOne
}

const reducers = {
    featureOne: featureOneReducer
}

function makeStore() {
    const win = window as any;
    const devtools = win.__REDUX_DEVTOOLS_EXTENSION__
        && win.__REDUX_DEVTOOLS_EXTENSION__();

    const re = combineReducers<StoreShape>(reducers);

    return createStore<StoreShape>(re, devtools)
}

export const Store = makeStore();