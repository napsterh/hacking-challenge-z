import React, { useEffect, useState } from 'react';
import Logo from '../assets/logo-rimac.png'
import Thanks from '../assets/person-thanks.png'
import axios from 'axios'
import Gracia from '../assets/gracias.png'
import { StepComponentProps } from 'react-step-builder';

function Gracias(props: StepComponentProps): JSX.Element {

    const [datos, setDatos] = useState({email:''})

    const getDatos =  async () => {
        const res = await axios.get(`https://randomuser.me/api`)
        const datas:any = await JSON.parse(JSON.stringify(res.data))
        console.log("api", datas.results[0])
            setDatos(datas.results[0])
            // setDatos(datas.results[0].dob)
    }

    useEffect(() => {
        getDatos();
    }, [])


    return (
        <div className="gracias">
            <div className="grid-gracias">
                <div className="descripcion-gracias">
                    <div className="descripcion-gracias__familia">
                        <img src={Thanks} alt=""/>
                    </div>
                    <div className="descripcion-gracias__logo">
                        <img src={Logo} alt=""/>
                    </div>
                </div>
                <div className="formulario-gracias">
                    <div className="formulario-gracias__gracias">
                    </div>
                    <p className="formulario-gracias__titulo">
                        <span className="formulario-gracias__color">¡Te damos la bienvenida! </span>
                        <br></br>
                        <span className="">Cuenta con nosotros para proteger tu vehículo </span>
                    </p>
                    <h5 className="formulario-gracias__subtitulo">
                    Enviaremos la confirmación de compra de tu Plan Vehícular Tracking a tu correo:
                    </h5>
                    <h5 className="formulario-gracias__subtitulo">
                        {datos.email}
                    </h5>
                    <div className="formulario-gracias__form__btn">
                            <a href="">
                                <input type="submit" value="como usar mi seguro" className=" solid" />
                            </a>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Gracias;