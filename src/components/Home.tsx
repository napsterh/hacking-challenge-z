import React, {useEffect, useState} from 'react';
import Logo from '../assets/logo-rimac.png'
import Auto from '../assets/auto.png'
import Escudo from '../assets/ic_shield.png'
import Mobile from '../assets/ic_mobile.png'
import Cobertura from '../assets/ic_money.png'
import Clinicas from '../assets/ic_clinic.png'
import { StepComponentProps } from 'react-step-builder'
import { Form, Col, FormGroup, Dropdown, DropdownButton, Button } from 'react-bootstrap'

import { useForm } from 'react-hook-form'


function Home(props: StepComponentProps): JSX.Element {
    const { register, errors,  handleSubmit, formState} = useForm({mode:"onChange"});


    const onSubmit = (data:any, e:any) => {
        console.log(data)
        e.target.reset()
    }

    const [ captures, setCaptures ] = useState({document: ""});
    console.log("captures", captures)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCaptures({
            ...captures,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="home">
            <div className="grid">
                <div className="descripcion">
                    <div className="descripcion__auto">
                        <img src={Auto} alt=""/>
                    </div>
                    <div className="descripcion__logo">
                        <img src={Logo} alt=""/>
                    </div>
                    <h1 className="descripcion__titulo">
                        Seguro <span>Vehicular<br></br> Tracking</span>
                    </h1>
                    <div className="descripcion__lista">
                        <p>Cuentanos donde le haras seguimiento a tu seguro</p>
                    </div>
                    <footer className="descripcion__derechos">
                        @ 2021 RIMAC Seguros y Reaseguros
                    </footer>
                </div>
                <div className="formulario">
                    <div className="formulario__header">
                        <p>¿Tienes alguna duda?</p><a href="/">(01) 411 6001
                        </a>
                    </div>
                    <h5 className="formulario__subtitulo">
                        Déjanos tus datos
                    </h5>
                    <Form onSubmit={handleSubmit(onSubmit)} >
                        <Form.Row>
                            <Form.Group as={Col} xs={4} controlId="formGridState">
                                <Form.Control as="select" defaultValue="DNI" className="mt-4">
                                    <option>DNI</option>
                                    <option>CARNET EXT.</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} xs={8} controlId="formGridAddress2" className="mt-4">
                                <Form.Control
                                    onChange={handleChange}
                                    name="document"
                                    ref={
                                        register({
                                            required: {value: true, message: 'Ingrese un número de documento'}
                                        })
                                    }
                                    placeholder="N° Documento"
                                />
                                <span className="text-danger text-small d-block md-2">
                                    {errors?.document?.message}
                                </span>
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Control
                                    type="phone"
                                    placeholder="Celular"
                                    name="phone"
                                    ref={
                                        register({
                                            required: {value: true, message: 'Ingrese su número de celular'}
                                        })
                                    }
                                />
                                <span className="text-danger text-small d-block md-2">
                                    {errors?.phone?.message}
                                </span>
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Control
                                    type="text"
                                    placeholder="Placa"
                                    name="placa"
                                    ref={
                                        register({
                                            required: {value: true, message: 'Ingrese su número de placa'}
                                        })
                                    }
                                />
                                <span className="text-danger text-small d-block md-2">
                                    {errors?.placa?.message}
                                </span>
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check
                                type="checkbox"
                                label={<label>Acepto la <a href='/'>Política de Protección de Datos Personales y los Términos y Condiciones.</a></label>}
                                name="check1"
                                ref={
                                    register({
                                        required: {value: true, message: 'Acepte la Política de Protección de Datos'}
                                    })
                                }
                            />
                            <span className="text-danger text-small d-block md-2">
                                {errors?.check1?.message}
                            </span>
                        </Form.Group>
                        <Button  className="btn btn-danger" type="submit" onClick={props.next} disabled={!formState.isValid}>
                            Cotízalo
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Home;