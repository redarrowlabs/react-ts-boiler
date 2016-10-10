//https://github.com/erikras/ducks-modular-redux

//Actions
const BUTTON_CLICK = 'redarrowlabs/BUTTON_CLICK'

//Interfaces
export interface FeatureOne {
    greet: string
}

//Reducer
const initialState: FeatureOne = {
    greet: "World"
}

//TODO typed actions
export function featureOneReducer(prev = initialState, action: any) {
    switch (action.type) {
        case BUTTON_CLICK:
            return {
                greet: 'Red Arrow'
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