import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const MostrarCampos = () => {
    const state = useSelector(state => state)
    const dispatch = useDispatch()

    const borrarCampo = (e, posicion) => {
        console.log('borrar', posicion)
        e.preventDefault();
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
        </div>

    )
}
