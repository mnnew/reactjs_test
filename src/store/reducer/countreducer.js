import { DECREPTED, INCREPTED } from "../actionType";

const initialState = {
    increment: 0
}

export const countReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREPTED:
            return {
                increment: action.payload
            }
            break;

        case DECREPTED:
            return {
                increment: action.payload
            }
            break;
    
        default:
            return{
                state
            }
            break;
    }
}