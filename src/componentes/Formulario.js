import { useState, useEffect } from "react";
import { fields } from "../Golbal/fields";
import Header from "./Header";

export const Formulario = () => {
    const [campos, setCampos] = useState(fields);
    const [componente, setComponente] = useState('');
    const [label, setLabel] = useState('');
    const [type, setType] = useState('');

    useEffect(() => {
        console.log('renderizo campos')

    }, [campos]);
    const recibirFormulario = (e) => {
        e.preventDefault();
        let campo = {
            componente: componente,
            label: label,
            type: type,
            uuid: 1
        }
        setCampos([...campos, campo])
        // console.log(componente)
    }
    const cambiaComponente = (e) => {
        e.preventDefault();
        setComponente(e.target.value)

    }

    const cambiaEtiqueta = (e) => {
        e.preventDefault(e);
        setLabel(e.target.value)

    }
    const cambiaTipo = (e) => {
        e.preventDefault();
        setType(e.target.value)

    }
    const borrarCampo = (e, posicion) => {
        e.preventDefault();
        console.log('entro borrar')

        console.log(campos[posicion])
        let newCampos = campos
        newCampos.splice(posicion, 1)
        console.log(posicion)
        console.log('nuevo Campos')

        console.log(newCampos)
        setCampos(newCampos)


    }

    return (
        <div>
            <Header/>
            <br/>
            <h1 className="subHeader">Agregar un campo</h1>
            <form className="mid-form" onSubmit={recibirFormulario}>
                <div className="form-group">
                    <label htmlFor="nombre">Componente</label>
                    <input type="text" name="nombre" onChange={cambiaComponente} />
                </div>

                <div className="form-group">
                    <label htmlFor="apellidos">Etiqueta</label>
                    <input type="text" name="apellidos" onChange={cambiaEtiqueta} />
                </div>

                <div className="form-group">
                    <label htmlFor="tipo">Tipo</label>
                    <br/>

                </div>
                <div className="form-group radibuttons" name="tipo">
                    <input className="radioBtn" type="radio" name="tipo" value="text" onChange={cambiaTipo} /> Text
                    <input className="radioBtn"type="radio" name="tipo" value="submit" onChange={cambiaTipo} /> Submit
                </div>


                <div className="clearfix"></div>

                <input type="submit" value="Agregar" className="btn btn-success" />

            </form>
            <h1 className="subHeader">Campos Agregados</h1>
            <form className="mid-form">

                {
                    campos.map((campo, i) => {
                        return (
                            <div className="form-group" key={i}>
                                {
                                    campo.type === 'text'
                                        ?
                                        // <input type={campo.type} name={campo.componente} onChange={cambiaComponente} />
                                        <span>
                                            <label htmlFor="nombre">{campo.label}</label>
                                            <input type={campo.type} name={campo.componente}  />
                                        </span>
                                        :
                                        <input className="btn btn-success" type={campo.type} name={campo.componente} value={campo.label} onChange={cambiaComponente} />

                                }
                                <button onClick={(e) => borrarCampo(e, i)} className="btn btn-warnning">Borrar</button>
                            </div>
                        )
                    })
                }
            </form>

        </div>
    );

}