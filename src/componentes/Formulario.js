import { useState, useEffect, useContext } from "react";
import { fields } from "../Golbal/fields";
import Header from "./Header";
import Context from "../context/context";

export const Formulario = () => {
    const cam = [];
    const [componente, setComponente] = useState('');
    const [label, setLabel] = useState('');
    const [type, setType] = useState('');

    const {contextCampos, actualizarCampos} = useContext(Context)
    const [campos, setCampos] = useState(contextCampos);

    useEffect(() => {
        console.log('renderizo campos')
        console.log(contextCampos)
    }, [contextCampos]);

    const recibirFormulario = (e) => {
        e.preventDefault();
        let campo = {
            componente: componente,
            label: label,
            type: type,
            uuid: 1
        }
        setCampos([...campos, campo])
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
        let newCampos = campos
        newCampos.splice(posicion, 1)
        // setCampos()
        console.log(newCampos)
        setCampos(newCampos)
    }
    const submitprueba = (e) => {
        e.preventDefault();

    }
    return (
        <div>
            <Header />
            <br />
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
                    <br />

                </div>
                <div className="form-group radibuttons" name="tipo">
                    <input className="radioBtn" type="radio" name="tipo" value="text" onChange={cambiaTipo} htmlFor="tipo" /> Text
                    <input className="radioBtn" type="radio" name="tipo" value="submit" onChange={cambiaTipo} htmlFor="tipo" /> Submit
                </div>


                <div className="clearfix"></div>

                <input type="submit" value="Agregar" className="btn btn-success" />

            </form>
            <div className="clearfix"></div>
            <h1 className="subHeader">Campos Agregados</h1>
            <form className="mid-form">
                {

                    campos.map((campo, i) => {
                        return (
                            <div className="form-group" key={i}>
                                {
                                    campo.type === 'text' &&

                                    // <input type={campo.type} name={campo.componente} onChange={cambiaComponente} />
                                    <span>
                                        <label htmlFor="nombre">{campo.label}</label>
                                        <input type={campo.type} name={campo.componente} />
                                    </span>

                                }
                                {
                                    campo.type === 'submit' &&
                                    <span>
                                        <br />
                                        <input className="btn btn-success2" type={campo.type} name={campo.componente} value={campo.label} onClick={submitprueba} />
                                        <br />

                                    </span>
                                }
                                <div className="clearfix"></div>

                                <button onClick={(e) => borrarCampo(e, i)} className="btn btn-warnning">Borrar</button>
                                <div className="clearfix"></div>
                                <br />

                                <hr />
                            </div>
                        )
                    })


                }

            </form>

        </div>
    );

}