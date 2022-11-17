export const INCRENET_COUNTER = "INCRENET_COUNTER";
export const DECRENET_COUNTER = "DECRENET_COUNTER";

export interface CounterState {
    data: number;
    title: string;
}

const initialState: CounterState = {
    data: 42,
    title: 'YARC (yet another redux counter)'
}

export function increment(amount = 1) {
    return {
        type: INCRENET_COUNTER,
        payload: amount
    }
}

export function decrement(amount = 1) {
    return {
        type: DECRENET_COUNTER,
        payload: amount
    }
}

export default function counterReducer(state = initialState, action: any) {
    switch (action.type) {
        case INCRENET_COUNTER:
            return {
                ...state,
                data: state.data + action.payload
            }
        case DECRENET_COUNTER:
            return {
                ...state,
                data: state.data - action.payload
            }
        default:
            return state;
    }

    return state;
}