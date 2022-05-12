import React from 'react';
import { Camioneta } from './Camineta';
import { CamionetaProvider } from '../../context/CamionetaContext';
export const Agencia = (props) => {

    return (
        <CamionetaProvider >
            <Camioneta/>
        </CamionetaProvider>
    )
}
