import  React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reset, restar, sumar, sumar_5 } from '../Actions/contadorActions';
import { DECREMENT, INCREMENT, INCREMENT_5, RESET } from '../Types';

export const Contador = () =>{
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    return (
        <div>
        <h1>Contador</h1>
        <nav>
            <button onClick={() => dispatch({type: INCREMENT, payload: 1})}> +1 </button>
            <button onClick={() => dispatch({type: INCREMENT_5, payload: 5})}> 5 </button>
            <button onClick={() => dispatch({type: DECREMENT, payload: 1})}> -1 </button>
            <button onClick={() => dispatch({type: RESET})}> Resetear </button>
            <h3>{state.contador}</h3>
        </nav>
        </div>

    )
}
