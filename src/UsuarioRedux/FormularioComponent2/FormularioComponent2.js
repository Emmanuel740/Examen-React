//5.- Usar nuestro estado global de Redux en nuestros componentes
import React, { Component } from "react";
//importar los hooks de Redux en caso de utilizarlos 
import { useDispatch, useSelector } from 'react-redux';
//importar nuestro store glogal
import store from "../store/store";
import { MostrarCampos } from "../FormularioComponent/MostrarCampos";
import { GUARDAR_USUARIO } from "../Types/types";

export default class FormularioComponent2 extends Component {

    constructor(props) {
        super(props)
        //Inicializar nuestro estado 
        this.state = {
            usuarios: [],
            componente: '',
            label: '',
            type: '',
            uuid: 1
        };

    }
    componentDidMount() {
        //Suscribir nuestro store para actualizar el estado cuando haya algun cambio
        store.subscribe(() => {
            this.setState({
                usuarios: store.getState().usuarios
            });
        });
    }
    componentDidUpdate() {
    }
    recibirFormulario(e) {
        e.preventDefault();
        console.log(this.state)
        let campo = {
            componente: this.state.componente,
            label: this.state.label,
            type: this.state.type,
            uuid: 1
        }
        store.dispatch({ type: GUARDAR_USUARIO, payload: campo })
    }
    cambiaComponente(e) {
        e.preventDefault();
        this.setState({ ...this.state, componente: e.target.value })

    }

    cambiaEtiqueta(e) {
        e.preventDefault(e);
        this.setState({ ...this.state, label: e.target.value })
        // setLabel(e.target.value)

    }
    cambiaTipo(e) {
        e.preventDefault();
        this.setState({ ...this.state, type: e.target.value })

        // setType(e.target.value)

    }


    render() {
        return (
            <div>
                <br />
                <h1 className="subHeader">Agregar un campo 2</h1>
                <form className="mid-form" onSubmit={(e) => this.recibirFormulario(e)}>
                    <div className="form-group">
                        <label htmlFor="nombre">Componente</label>
                        <input type="text" name="nombre" onChange={(e) => this.cambiaComponente(e)} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="apellidos">Etiqueta</label>
                        <input type="text" name="apellidos" onChange={(e) => this.cambiaEtiqueta(e)} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="tipo">Tipo</label>
                        <br />

                    </div>
                    <div className="form-group radibuttons" name="tipo">
                        <input className="radioBtn" type="radio" name="tipo" value="text" onChange={(e) => this.cambiaTipo(e)} /> Text
                        <input className="radioBtn" type="radio" name="tipo" value="submit" onChange={(e) => this.cambiaTipo(e)} /> Submit
                    </div>


                    <div className="clearfix"></div>

                    <input type="submit" value="Agregar" className="btn btn-success" />

                </form>

                <MostrarCampos />

            </div>
        )
    }
}