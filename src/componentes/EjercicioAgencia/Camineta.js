import React, {useEffect, useState, useContext} from 'react';
import CamionetaContext from '../../context/CamionetaContext';

export const Camioneta = (props) => {
    const CamionetaOjbject = useContext(CamionetaContext);
    
    const { modelo, marca, nombreAgencia } = CamionetaOjbject;

    const [model, setModel] = useState(modelo);
    const [brand, setBrand] = useState(marca);
    const [agence, setAgence] = useState(nombreAgencia);

    useEffect(() => {
        if (!model){ 
            alert("No hay modelo")
        }
    }, [model])

    useEffect(() => {
        if (!brand){
            alert("No hay marca")
        }
    }, [brand])

    useEffect(() => {
        if (!agence){
            alert("No hay agencia")
        }
    }, [agence])

    return (
        <React.Fragment>
            <h1>Ejercicio "Agencia"</h1>
            <br />
            <h2>{model}</h2>
            <h2>{brand}</h2>
            <h2>{agence}</h2>
        </React.Fragment>


    )
}
