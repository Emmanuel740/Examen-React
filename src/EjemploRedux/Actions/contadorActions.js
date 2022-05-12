import { DECREMENT, INCREMENT, INCREMENT_5, RESET } from "../Types";

export const sumar = () =>({type: INCREMENT})
export const sumar_5 = () =>({type: INCREMENT_5, payload:5})
export const restar = () =>({type: DECREMENT})
export const reset = () =>({type: RESET})
