import { ADD,SUB,MUL } from "../action/type";

const initialState = {
    value: 1
}

export default function(state = initialState, action) {

    switch(action.type) {
        case ADD:
            return {
                ...state, value: state.value + action.payload
            }
        case SUB:
            return {
                ...state, value: state.value - action.payload
            }
        case MUL:
            console.log(action.data);
            return {
                ...state, value: state.value * action.payload
            }
        default:
            return state;
    }
}