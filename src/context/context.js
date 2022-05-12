import {createContext, useState} from "react";


export const Context = createContext([{
    componente: 'component',
    label: 'Nombre',
    type: '',
    uuid: 1
}]);

const ContextProvider = ({children}) =>{
     const [Campos, setCampos] = useState({
        componente: '',
        label: '',
        type: '',
        uuid: null
     })
     const actualizarCampos = (campos) =>{
        setCampos(campos)
     }
     
     const data = {Campos, actualizarCampos};
     return <Context.Provider value={data}>{children}</Context.Provider>
}

export {ContextProvider}
export default Context