import React, {Component} from "react";
import { useDispatch, useSelector } from 'react-redux';

export default class FormularioComponent2 extends Component{

    constructor(props){
        super(props)
        const state = useSelector(state => state)
        const dispatch = useDispatch()
    }

    render(){
        return(
            <React.Fragment>
                <h1>Hola Formulario 2</h1>
            </React.Fragment>
        )
    }
}