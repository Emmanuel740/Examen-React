import React, { Component } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reset, restar, sumar, sumar_5 } from '../Actions/contadorActions';
import { DECREMENT, INCREMENT, INCREMENT_5, RESET } from '../Types';
import store from '../store/store';
import { BotonContador } from './Componentes/Botton';
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
                <h1>Contador Clase</h1>
                {/* <button onClick={this.Agregar}> +1 </button> */}
                <BotonContador Accion={this.Agregar} titulo="+1"/>
                {this.state
                .contador.map((numero, i) => {
                        return (<div key={i}>
                            <h1 >
                                {numero}   
                            </h1>
                            <button onClick={() => this.Borrar(i)}>
                                Borrar
                            </button>
                            {/* <BotonContador Accion={() => this.Borrar(i)} titulo="Borrar"/> */}

                        </div>)


                        })}
            </div>
        )
    }
} 
// useSelector(state => state)
// const dispatch = useDispatch()
// return (
        

//     )
// }
