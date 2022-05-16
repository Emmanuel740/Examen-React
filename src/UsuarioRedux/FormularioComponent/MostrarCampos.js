//6.- Componente donde se muestran los usuarios 
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BORRAR_USUARIO } from '../Types/types';
export const MostrarCampos = () => {
    const state = useSelector(state => state)
    const dispatch = useDispatch()

    const borrarCampo = (e, posicion) => {
        e.preventDefault();
        dispatch({ type: BORRAR_USUARIO, payload: posicion })
    }
    return (
        <div>
            <form className="mid-form" >
                <h1>Mostrar Campos</h1>
                {state.usuarios.map((campo, i) => {
                    return (
                        <div className="form-group" key={i}>
                            {campo.type === 'text' ?
                                <span>
                                    <label htmlFor="nombre">{campo.label}</label>
                                    <input type={campo.type} name={campo.componente} />
                                </span> :
                                <input className="btn btn-success" type={campo.type} name={campo.componente} value={campo.label} />
                            }
                            <button onClick={(e) => borrarCampo(e, i)} className="btn btn-warnning">Borrar</button>
                        </div>
                    )
                })
                }
            </form>
        </div>
    )
}
