import { useEffect } from "react"

export const Campo = (props) => {

    useEffect(() => {
        console.log(props)

    }, [props]);
    const borrarC = (i) =>{
        props.borrarCampo(i)
    }

    return (
        <span>
            {
                props.campo.type === 'text'
                    ?
                    <span>
                        <div className="clearfix"></div>

                        <label htmlFor="nombre">{props.campo.label}</label>
                        <input type={props.campo.type} name={props.campo.componente} />
                        <div className="clearfix"></div>

                    </span>
                    :
                    <span>
                        <div className="clearfix"></div>
                        <input className="btn btn-success" type={props.campo.type} name={props.campo.componente} value={props.campo.label} />

                        <div className="clearfix"></div>

                    </span>

            }
            <div className="clearfix"></div>

            <button onClick={() => borrarC(props.index)} className="btn btn-warnning">Borrar</button>

        </span>
    )
}