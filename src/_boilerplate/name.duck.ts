import { Dispatch } from 'redux';
import { GetState } from '../store';
import { fetchRemoteResource } from './name.hub';

//============
// Interfaces
//============
import { doop, field } from 'doop';

@doop
export class FeatureName {
    @doop
    get myProperty() { return field<string, this>('todo'); }
    @doop
    get anotherProperty() { return field<string, this>('todo'); }
}

//=========
// Reducer
//=========
export const initialState = new FeatureName();

//TODO typed actions
export function featureNameReducer(prev = initialState, action: any): FeatureName {
    switch (action.type) {
        case ACTION_1: {
            return prev.myProperty('next');
        }
        case ASYNC_ACTION_SUCCESS: {
            return prev
                .myProperty(action.data)
                .anotherProperty('success');
        }
        default: return prev;
    }
}

//=========
// Actions
//=========
export const ACTION_1 = 'redarrowlabs/feature-name/ACTION_1';

export const ASYNC_ACTION_PENDING = 'redarrowlabs/feature-name/ASYNC_ACTION_PENDING';
export const ASYNC_ACTION_SUCCESS = 'redarrowlabs/feature-name/ASYNC_ACTION_SUCCESS';
export const ASYNC_ACTION_FAILURE = 'redarrowlabs/feature-name/ASYNC_ACTION_FAILURE';

//=================
// Action Creators
//=================
export function doActionOne(data: string) {
    return {
        type: ACTION_1,
        payload: data,
    };
}

export function doAsyncAction(data: string) {
    return async (dispatch: Dispatch<{}>, getState: GetState) => {
        dispatch(doAsyncActionPending());

        const res = await fetchRemoteResource(data);

        if (!res.success) {
            dispatch(doAsyncActionFailure());
            return;
        }

        dispatch(doAsyncActionSuccess(res.data));
    };
}

export function doAsyncActionPending() {
    return {
        type: ASYNC_ACTION_PENDING,
    };
}

export function doAsyncActionSuccess(data: string) {
    return {
        type: ASYNC_ACTION_SUCCESS,
        payload: data,
    };
}

export function doAsyncActionFailure() {
    return {
        type: ASYNC_ACTION_FAILURE,
    };
}
