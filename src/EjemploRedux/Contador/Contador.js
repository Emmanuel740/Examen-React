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
<<<<<<< HEAD
            <button onClick={() => dispatch({type: INCREMENT, sumar})}>+1</button>
            <button onClick={() => dispatch({type: INCREMENT_5})}>5</button>
            <button onClick={() => dispatch({type: DECREMENT, restar})}>-1</button>
            <button onClick={() => dispatch({type: RESET, reset})}>Resetear</button>
=======
            <button onClick={() => dispatch({type: INCREMENT, payload: 1})}> +1 </button>
            <button onClick={() => dispatch({type: INCREMENT_5, payload: 5})}> 5 </button>
            <button onClick={() => dispatch({type: DECREMENT, payload: 1})}> -1 </button>
            <button onClick={() => dispatch({type: RESET})}> Resetear </button>
>>>>>>> 342ac5ae839890c695da7e94116dfac4cb40a1ff
            <h3>{state.contador}</h3>
        </nav>
        </div>

    )
}
