
export const BotonContador = ({Accion, titulo}) =>{
    return(
        <button onClick={Accion}>
            {titulo}
        </button>
    )
}