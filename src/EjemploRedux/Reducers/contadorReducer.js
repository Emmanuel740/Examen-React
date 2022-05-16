import { DECREMENT, INCREMENT, INCREMENT_5, RESET } from "../Types";

const initialState = [];
export default function contadorReducer(state = initialState, action){
switch(action.type){
    case INCREMENT:
        if(state.length > 0){
            let ultimo = state.length - 1;
            let ultimapos = state[ultimo] + 1
            let newState = [...state,ultimapos]
            console.log(newState)
            return newState
        }else{
            return state = [0]
        }
        
    case INCREMENT_5:
        return [...state,action.payload]
    case DECREMENT:
        state.splice(action.payload,1)
        // console.log(newState)  
        // state = [...newState]
        console.log(action.payload)  
        console.log(state)
        return state
    case RESET:
        return initialState
    default:
        return state;
}
};