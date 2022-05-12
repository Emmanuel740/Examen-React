import React, { Component } from 'react';
import Header from './Header';
import { fields } from "../Golbal/fields";
import { field } from '../models/field.ts';
import { Campo } from './CampoComponente';

export default class FormularioDos extends Component {

    state = new field(fields, '', '', '')
    componentDidMount() {
        console.log('se monto')
    }
    componentDidUpdate() {
        console.log(this.state.campos)
    }
    
    recibirFormulario = (e) => {
        e.preventDefault();
        let bandera = true;

        if (this.state.componente === '') {
            bandera = false;
        }
        if (this.state.label === '') {
            bandera = false;

        }
        if (this.state.type === '') {
            bandera = false;

        }
        if (bandera) {
            console.log(this.state)
            let campo = {
                componente: this.state.componente,
                label: this.state.label,
                type: this.state.type,
                uuid: 1
            }
            this.setState({
                campos: [...this.state.campos, campo],
                componente: this.state.componente,
                label: this.state.label,
                type: this.state.type
            })

        } else {
            alert('Faltan campos, por favor completalos :)')
        }

    }
    cambiaComponente = (e) => {
        e.preventDefault();
        this.setState({
            campos: this.state.campos,
            componente: e.target.value,
            label: this.state.label,
            type: this.state.type
        })


    }
    cambiaEtiqueta = (e) => {
        e.preventDefault();
        this.setState({
            campos: this.state.campos,
            componente: this.state.componente,
            label: e.target.value,
            type: this.state.type
        })


    }
    cambiaTipo = (e) => {
        e.preventDefault();
        this.setState({
            campos: this.state.campos,
            componente: this.state.componente,
            label: this.state.label,
            type: e.target.value
        })

    }
    submitEnviado = (e) => {
        e.preventDefault();
        // console.log(e)

    }
    borrarCampo(e,posicion) {
        console.log('borrar',posicion)
        e.preventDefault();
        console.log(posicion)

        let newCampos = this.state.campos
        newCampos.splice(posicion, 1)
        console.log('nuevo Campos')

        console.log(newCampos)
        this.setState({
            campos: newCampos,
            componente: this.state.componente,
            label: this.state.label,
            type: this.state.type
        })

    }
    render() {
        return (
            <div>
                <Header />
                <br />
                <h1 className="subHeader">Agregar un campo</h1>
                <form className="mid-form" onSubmit={this.recibirFormulario}>
                    <div className="form-group">
                        <label htmlFor="nombre">Componente</label>
                        <input type="text" name="nombre" onChange={this.cambiaComponente} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="apellidos">Etiqueta</label>
                        <input type="text" name="apellidos" onChange={this.cambiaEtiqueta} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="tipo">Tipo</label>
                        <br />

                    </div>
                    <div className="form-group radibuttons" name="tipo" >
                        <input className="radioBtn" type="radio" name="tipo" value="text" onChange={this.cambiaTipo} /> Text
                        <input className="radioBtn" type="radio" name="tipo" value="submit" onChange={this.cambiaTipo} /> Submit
                    </div>


                    <div className="clearfix"></div>

                    <input type="submit" value="Agregar" className="btn btn-success" />
                    <div className="clearfix"></div>

                </form>
                <h1 className="subHeader">Campos Agregados</h1>
                <form className="mid-form" onSubmit={this.submitEnviado}>

                    {this.state.campos.length > 0 ?
                        this.state.campos.map((campo, i) => {
                            return (
                                // <Campo
                                //         campo={campo}
                                //         key={i}
                                //         index={i}
                                //         borrarCampo = {this.borrarCampo}

                                //     ></Campo>
                                <div className="form-group" key={i}>
                                    
                                    {
                                        campo.type === 'text'
                                            ?
                                            // <input type={campo.type} name={campo.componente} onChange={cambiaComponente} />
                                            <span>
                                                <div className="clearfix"></div>

                                                <label htmlFor="nombre">{campo.label}</label>
                                                <input type={campo.type} name={campo.componente} />
                                                <div className="clearfix"></div>

                                            </span>
                                            :
                                            <span>
                                                <div className="clearfix"></div>
                                                <input className="btn btn-success" type={campo.type} name={campo.componente} value={campo.label} />

                                                <div className="clearfix"></div>

                                            </span>

                                    }
                                    <div className="clearfix"></div>

                                    <button onClick={(e) => this.borrarCampo(e, i)} className="btn btn-warnning">Borrar</button>
                                </div>
                            )
                        })
                        :
                        <span>
                            <br />
                            <h1 className="subHeader">Aun no hay campos agregados</h1>
                        </span>


                    }
                </form>

            </div>
        );
    }
}