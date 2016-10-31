//https://github.com/erikras/ducks-modular-redux
import { Dispatch, Action } from 'redux';
import { GetState } from './store';
import { fetchMyRemoteResource } from './hub';

//Actions
const BUTTON_CLICK = 'redarrowlabs/BUTTON_CLICK'

const GET_RESOURCE_PENDING = 'redarrowlabs/GET_RESOURCE_PENDING';
const GET_RESOURCE_SUCCESS = 'redarrowlabs/GET_RESOURCE_SUCCESS';
const GET_RESOURCE_FAILURE = 'redarrowlabs/GET_RESOURCE_FAILURE';

//Interfaces
export interface FeatureOne {
    greet: string;
    answer: number;
}

//Reducer
export function initialState(): FeatureOne {
    return {
        greet: "World",
        answer: 0
    }
}

//TODO typed actions
export function featureOneReducer(prev = initialState(), action: any) {
    switch (action.type) {
        case BUTTON_CLICK: {
            return {
                greet: 'Red Arrow',
                answer: prev.answer
            }
        }
        case GET_RESOURCE_SUCCESS: {
            return {
                greet: prev.greet,
                answer: action.payload
            }
        }
    }
    return prev;
}

//Action Creators
export function handleClick() {
    return {
        type: BUTTON_CLICK
    }
}

export function getRemoteResource() {
    return async (dispatch: Dispatch<Action>, getState: GetState) => {
        dispatch(getRemoteResourcePending());

        //Wait on something promise based to finish.
        const res = await fetchMyRemoteResource();

        if (!res.success) {
            dispatch(getRemoteResourceFailure())
            return;
        }

        dispatch(getRemoteResourceSuccess(res.data))
    }
}

export function getRemoteResourcePending() {
    return {
        type: GET_RESOURCE_PENDING
    }
}

export function getRemoteResourceSuccess(data: number) {
    return {
        type: GET_RESOURCE_SUCCESS,
        payload: data
    }
}

export function getRemoteResourceFailure() {
    return {
        type: GET_RESOURCE_FAILURE
    }
}