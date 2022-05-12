import { DECREMENT, INCREMENT, INCREMENT_5, RESET } from "../Types";

const initialState = 0;
export default function contadorReducer(state = initialState, action){
switch(action.type){
    case INCREMENT:
        return state + 1
    case INCREMENT_5:
        return state + action.payload
    case DECREMENT:
        return state - 1
    case RESET:
        return initialState
    default:
        return state;
}
};