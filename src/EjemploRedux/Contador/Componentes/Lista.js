import React from "react"
import { BotonContador } from "./Botton"
import { useDispatch } from 'react-redux';
import { DECREMENT } from "../../Types";
export const Lista = ({contador}) =>{
    
    
    const dispatch = useDispatch()
    const Borrar = (pos) => {
        dispatch({ type: DECREMENT, payload: pos })
    }
    return(
        <React.Fragment>
        {
           contador.map((numero, i) => {
                        return (<div key={i}>
                            <h1 >
                                {numero}   
                            </h1>
                            {/* <button onClick={() => this.Borrar(i)}>
                                Borrar
                            </button> */}
                            <BotonContador Accion={() => Borrar(i)} titulo="Borrar"/>

                        </div>)


                })
        }
        </React.Fragment>
        
    )
}