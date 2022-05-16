import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BORRAR_USUARIO } from '../../UsuarioRedux/Types/types';
import { reset, restar, sumar, sumar_5 } from '../Actions/contadorActions';
import { DECREMENT, INCREMENT, INCREMENT_5, RESET } from '../Types';

export const Contador2 = () => {
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    const borrar = (e,pos) =>{

        dispatch({type: DECREMENT,payload: pos})
    }
    return (
        <div>
            <h1 style={{color: 'green'}}>Contador 2</h1>
            <nav>
                <button onClick={() => dispatch({ type: INCREMENT, payload: 1 })}> +1 </button>
                <button onClick={() => dispatch({ type: INCREMENT_5, payload: 5 })}> 5 </button>
                <button onClick={() => dispatch({ type: DECREMENT, payload: 1 })}> -1 </button>
                <button onClick={() => dispatch({ type: RESET })}> Resetear </button>
                {
                    state.contador.map((numero, i) => {
                        return (<div key={i}>
                            <h1 >
                                {numero}   
                            </h1>
                            <button onClick={(e) => borrar(e,i)}>
                                Borrar
                            </button>
                        </div>)


                        })

                }
            </nav>
        </div>

    )
}
