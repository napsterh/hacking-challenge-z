import React, { useEffect, useState } from 'react';
import Autito from '../assets/autito.svg'
import axios from 'axios'
import { StepComponentProps } from 'react-step-builder';
import { Form, Col, FormGroup, Dropdown, DropdownButton, Button, Modal, Row, Nav, Tabs, Tab } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import TabH from './TabH';
import Persona from '../assets/persona.png'
import Vehicular from '../assets/vehicular.svg'
import Check from '../assets/check.png'


function Planes(props: StepComponentProps): JSX.Element {


    const [datos, setDatos] = useState({
        first: '',
        name:'',
        last: '',
        value:'',
        date: '',
        numDocumento: '',
        apellidoPaterno: '',
        apellidoMaterno: '',
        fecNacimiento: ''
    })

    const getDatos =  async () => {
        const res = await axios.get(`https://randomuser.me/api`)
        const datas:any = await JSON.parse(JSON.stringify(res.data))
        console.log("api", datas.results[0])
            setDatos(datas.results[0].name)
            // setDatos(datas.results[0].dob)
    }

    useEffect(() => {
        getDatos();
    }, [])

    const { register, errors,  handleSubmit, formState} = useForm({mode:"onChange"});


    const onSubmit = (data:any, e:any) => {
        console.log(data)
        e.target.reset()
    }

    return (
        <div className="planes">
            <div className="grid-planes">
                <div className="descripcion-planes">
                </div>
                <div className="formulario-planes">
                    <h1 className="">
                        Mira las coberturas
                    </h1>
                    <h5 className="formulario-planes__subtitulo">
                        Conoce las coberturas para tu plan
                    </h5>

                    <Form className="formulario-planes__form" onSubmit={handleSubmit(onSubmit)}>
                        <div className="card-container">
                            <div className="card cardito">
                                <label htmlFor="card1">
                                    <h5>Placa:</h5>
                                    <h3>
                                    Wolkswagen Golf
                                    </h3>
                                    <h3>2019</h3>
                                    <h6>
                                        <a href="/">EDITAR</a>
                                    </h6>
                                </label>
                            </div>
                            <div className="personita">
                                <img src={Persona}></img>
                            </div>
                        </div>
                        <h5 className="formulario-planes__subtitulo my-5">
                            Agrega o quita cobertura
                        </h5>
                        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                            <Tab eventKey="home" title="PROTEGE TU AUTO">
                                <TabH />
                            </Tab>
                            <Tab eventKey="profile" title="PROTEGE A TU ALREDEDOR">
                                <TabH />
                            </Tab>
                            <Tab eventKey="contact" title="MEJORA TU PLAN">
                                <TabH />
                            </Tab>
                        </Tabs>
                    </Form>
                </div>
                <div className="tercero-planes">
                    <div className="tercero-autito">
                        <div className="tercero-autito__primero">
                            <h1>$35.00</h1>
                            <p>mensuales</p>
                        </div>
                        <div className="tercero-autito__segundo">
                            <img src={Vehicular}></img>
                        </div>
                    </div>
                    <hr></hr>
                    <h6>El precio incluye:</h6>
                    <div className="check">
                        <p><img src={Check}></img> Llanta de respuesto</p>
                        <p><img src={Check}></img> Analisis de motor</p>
                        <p><img src={Check}></img> Aros gratis</p>
                    </div>
                    <Button  className="btn btn-danger mb-4 mt-5" type="submit" onClick={props.next} disabled={!formState.isValid}>
                            LO QUIERO
                        </Button>
                </div>
            </div>
        </div>
    )
}


export default Planes;