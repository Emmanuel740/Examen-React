import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
<<<<<<< HEAD
import FormularioComponent2 from '../FormularioComponent2/FormularioComponent2';
=======
import { BORRAR_USUARIO } from '../Types/types';

>>>>>>> 040683f4e960bdab53167a2ea4e05bc70c81d338
export const MostrarCampos = () => {
    const state = useSelector(state => state)
    const dispatch = useDispatch()

    const borrarCampo = (e, posicion) => {
<<<<<<< HEAD
        console.log('borrar', posicion)
        dispatch({type: "BORRAR_USUARIO", payload: posicion})
=======
>>>>>>> 040683f4e960bdab53167a2ea4e05bc70c81d338
        e.preventDefault();
        dispatch({type: BORRAR_USUARIO, posicion})
    }
    return (
        <div>
            <form className="mid-form" >

                <h1>Mostrar Contador</h1>
                {
                    state.usuario.map((campo, i) => {
                        return (
                            <div className="form-group" key={i}>
                                {
                                    campo.type === 'text'
                                        ?
                                        // <input type={campo.type} name={campo.componente} onChange={cambiaComponente} />
                                        <span>
                                            <label htmlFor="nombre">{campo.label}</label>
                                            <input type={campo.type} name={campo.componente} />
                                        </span>
                                        :
                                        <input className="btn btn-success" type={campo.type} name={campo.componente} value={campo.label} />

                                }
                                <button onClick={(e) => borrarCampo(e, i)} className="btn btn-warnning">Borrar</button>
                            </div>
                        )
                    })
                }
            </form>
            <FormularioComponent2 />
        </div>

    )
}
