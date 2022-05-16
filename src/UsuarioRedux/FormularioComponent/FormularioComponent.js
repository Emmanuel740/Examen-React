import  React from 'react';
//Importar hooks de estado
import { useState, useEffect } from "react";
//Importar hooks de redux para controlar el mismo
//Dispatch es para realizar alguna actualizacion en nuestro estado
//selector es para traer nuestro estado global
import { useDispatch, useSelector } from 'react-redux';
import { GUARDAR_USUARIO } from '../Types/types';
import { MostrarCampos } from './MostrarCampos';
import { Reducer } from 'redux';

export const FormularioComponent = () => {
    const dispatch = useDispatch()
    
    const [campos, setCampos] = useState([]);
    const [componente, setComponente] = useState('');
    const [label, setLabel] = useState('');
    const [type, setType] = useState('');
    const [variable, setVariable] = React.useState('Hola')
    useEffect(() => {
        console.log(campos)

    }, [campos]);
    const recibirFormulario = (e) => {
        e.preventDefault();
        let campo = {
            componente: componente,
            label: label,
            type: type,
            uuid: 1
        }
        // setCampos([...campos, campo])
        dispatch({type: "GUARDAR_USUARIO", payload: campo})
    }
    const cambiaComponente = (e) => {
        e.preventDefault();
        setComponente(e.target.value)

    }

    const cambiaEtiqueta = (e) => {
        e.preventDefault(e);
        setLabel(e.target.value)

    }
    const cambiaTipo = (e) => {
        e.preventDefault();
        setType(e.target.value)

    }
    
    
    

    return (
        <div>
            <br/>
            <h1 className="subHeader">Agregar un campo</h1>
            <form className="mid-form" onSubmit={recibirFormulario}>
                <div className="form-group">
                    <label htmlFor="nombre">Componente</label>
                    <input type="text" name="nombre" onChange={cambiaComponente} />
                </div>

                <div className="form-group">
                    <label htmlFor="apellidos">Etiqueta</label>
                    <input type="text" name="apellidos" onChange={cambiaEtiqueta} />
                </div>

                <div className="form-group">
                    <label htmlFor="tipo">Tipo</label>
                    <br/>

                </div>
                <div className="form-group radibuttons" name="tipo">
                    <input className="radioBtn" type="radio" name="tipo" value="text" onChange={cambiaTipo} /> Text
                    <input className="radioBtn"type="radio" name="tipo" value="submit" onChange={cambiaTipo} /> Submit
                </div>


                <div className="clearfix"></div>

                <input type="submit" value="Agregar" className="btn btn-success" />

            </form>
            <h1 className="subHeader">Campos Agregados</h1>
            <h1 className="subHeader">{variable}</h1>

            <MostrarCampos />

        </div>
    );

}