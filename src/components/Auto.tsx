import React, { useEffect, useState } from 'react';
import Autito from '../assets/autito.svg'
import axios from 'axios'
import { StepComponentProps } from 'react-step-builder';
import { Form, Col, FormGroup, Dropdown, DropdownButton, Button, Modal, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'


function Auto(props: StepComponentProps): JSX.Element {


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
        <div className="auto">
            <div className="grid-auto">
                <div className="descripcion-auto">
                </div>
                <div className="formulario-auto">
                    <p className="formulario-auto__titulo">
                        Hola!, <span className="formulario-auto__color">{datos.first}</span>
                    </p>
                    <h5 className="formulario-auto__subtitulo">
                        Completa los datos de tu auto
                    </h5>

                    <Form className="formulario-auto__form" onSubmit={handleSubmit(onSubmit)}>
                        <Form.Row>
                            <Form.Group as={Col} xs={12} controlId="formGridState">
                                <label htmlFor="" className="mt-3" >Año</label>
                                <Form.Control as="select" defaultValue="anio" className="">
                                    <option>2019</option>
                                    <option>2018</option>
                                    <option>2017</option>
                                    <option>2016</option>
                                </Form.Control>
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} xs={12} controlId="formGridState">
                                <label htmlFor="" className="mt-3" >Marca</label>
                                <Form.Control as="select" defaultValue="anio" className="">
                                    <option>Wolkswagen</option>
                                    <option>Toyota</option>
                                    <option>Mazda</option>
                                    <option>Nissan</option>
                                </Form.Control>
                            </Form.Group>
                        </Form.Row>

                        <h6 className="formulario-auto__form__gas">¿Tu auto es a gas?</h6>
                        <fieldset>
                            <Form.Group>
                                <Col sm={10}>
                                    <Form.Check
                                        type="radio"
                                        label="Sí"
                                        name="groupOptions"
                                        id="si"
                                    />
                                    <Form.Check
                                        type="radio"
                                        label="No"
                                        name="groupOptions"
                                        id="no"
                                    />
                                </Col>
                            </Form.Group>
                        </fieldset>

                        <div className="asegurada-auto">
                            <Row>
                                <div className="first">indica la suma asegurada</div>
                                <div className="second">MIN $12.500 | MAX $16.500</div>
                            </Row>
                            <Row>
                                <Form.Control as="select" custom>
                                    <option>12.500</option>
                                    <option>13.000</option>
                                    <option>14.000</option>
                                    <option>15.000</option>
                                    <option>16.500</option>
                                </Form.Control>
                            </Row>
                        </div>

                        <Button  className="btn btn-danger mb-4" type="submit" onClick={props.next} disabled={!formState.isValid}>
                            Continuar
                        </Button>
                    </Form>
                </div>
                <div className="tercero-auto">
                    <p>AYUDA</p>
                    <hr></hr>
                    <div className="tercero-autito">
                        <div className="tercero-autito__primero">
                            <p>¿No encuentras el modelo?</p>
                            <a href="/">CLICK AQUÍ</a>
                        </div>
                        <div className="tercero-autito__segundo">
                            <img src={Autito}></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Auto;