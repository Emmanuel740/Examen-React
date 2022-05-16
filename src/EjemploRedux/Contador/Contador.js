import React, { Component } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reset, restar, sumar, sumar_5 } from '../Actions/contadorActions';
import { DECREMENT, INCREMENT, INCREMENT_5, RESET } from '../Types';
import store from '../../UsuarioRedux/store/store';
import { BotonContador } from './Componentes/Botton';
import { Lista } from './Componentes/Lista';
export class Contador extends Component {

    constructor(props) {
        super(props)
            this.state = { contador: [] };
            
          
    }
    componentDidMount(){
        store.subscribe(() => {
            this.setState({
              contador: store.getState().contador
            });
          });
    }
    Agregar(){
        store.dispatch({ type: INCREMENT, payload: 1 })
    }
    Borrar(pos){
        store.dispatch({ type: DECREMENT, payload: pos })
    }


    render() {
        return (
            <div>
                <h1>Contador Clase 1</h1>
                <BotonContador Accion={this.Agregar} titulo="+1"/>
                
                <h1 style={{color: 'red'}}>Lista 2</h1>
                <Lista contador={this.state.contador}/>

            </div>
        )
    }
} 

