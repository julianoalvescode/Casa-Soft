import React, { useState } from 'react'

import { Container } from './../../styles/components/Add'

import validations from './../../validations/add'
import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik'

import { getDegree } from './../../utils'

import moment from 'moment'

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { Form } from 'react-bootstrap'

import { useDispatch } from 'react-redux'

const Add: React.FC = () => {
    const dispatch = useDispatch()

    const [show, SetShow] = useState(false)

    const handleOpen = () => SetShow(true)
    const handleClose = () => SetShow(false)

    const handleForm = async (v: any) => {
        try {
            await handleClose()

            moment.locale('pt-br')
            const date = moment().format('DD/MM/YYYY')

            const grau = getDegree({ q1: v.q1, q2: v.q2, q3: v.q3, q4: v.q4 })

            dispatch({
                type: '@customers/ADD_REQUEST',
                payload: {
                    newCustomer: {
                        nome: v.name,
                        idade: v.age,
                        grau: grau,
                        cadastro: date,
                    },
                },
            })
        } catch (e) {}
    }

    return (
        <>
            <Container>
                <button
                    type="button"
                    className="btn btn-primary"
                    data-toggle="modal"
                    data-target="#exampleModal"
                    onClick={handleOpen}
                >
                    Adicionar Usuário
                </button>
                <Modal onHide={handleClose} show={show}>
                    <Modal.Header closeButton>
                        <Modal.Title>Adicionar Usuário</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Formik
                            initialValues={{
                                name: '',
                                age: '',
                                q1: '',
                                q2: '',
                                q3: '',
                                q4: '',
                            }}
                            validationSchema={validations}
                            onSubmit={(v) => handleForm(v)}
                        >
                            <FormikForm>
                                <Form>
                                    <Form.Group>
                                        <Form.Label>Nome:</Form.Label>
                                        <Field
                                            name="name"
                                            className="form-control"
                                            type="text"
                                            placeholder="Nome"
                                        />
                                        <div className="erro">
                                            <ErrorMessage
                                                className="alert alert-danger"
                                                name="name"
                                                component="p"
                                            />
                                        </div>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Idade:</Form.Label>
                                        <Field
                                            name="age"
                                            className="form-control"
                                            type="text"
                                            placeholder="Idade"
                                        />
                                        <div className="erro">
                                            <ErrorMessage
                                                className="alert alert-danger"
                                                name="age"
                                                component="p"
                                            />
                                        </div>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Trabalha:</Form.Label>
                                        <Field
                                            name="q1"
                                            className="form-control"
                                            as="select"
                                        >
                                            <option></option>
                                            <option value="15">Sim</option>
                                            <option value="0">Não</option>
                                        </Field>
                                        <div className="erro">
                                            <ErrorMessage
                                                className="alert alert-danger"
                                                name="q1"
                                                component="p"
                                            />
                                        </div>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Possui carro:</Form.Label>
                                        <Field
                                            name="q2"
                                            className="form-control"
                                            as="select"
                                        >
                                            <option></option>
                                            <option value="10">Sim</option>
                                            <option value="0">Não</option>
                                        </Field>
                                        <div className="erro">
                                            <ErrorMessage
                                                className="alert alert-danger"
                                                name="q2"
                                                component="p"
                                            />
                                        </div>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Casado(a):</Form.Label>
                                        <Field
                                            name="q3"
                                            className="form-control"
                                            as="select"
                                        >
                                            <option></option>
                                            <option value="15">Sim</option>
                                            <option value="0">Não</option>
                                        </Field>
                                        <div className="erro">
                                            <ErrorMessage
                                                className="alert alert-danger"
                                                name="q3"
                                                component="p"
                                            />
                                        </div>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Possui filhos:</Form.Label>
                                        <Field
                                            name="q4"
                                            className="form-control"
                                            as="select"
                                        >
                                            <option></option>
                                            <option value="0">Sim</option>
                                            <option value="5">Não</option>
                                        </Field>
                                        <div className="erro">
                                            <ErrorMessage
                                                className="alert alert-danger"
                                                name="q4"
                                                component="p"
                                            />
                                        </div>
                                    </Form.Group>
                                </Form>
                                <Modal.Footer>
                                    <Button
                                        onClick={handleClose}
                                        variant="secondary"
                                    >
                                        Cancelar
                                    </Button>
                                    <Button type="submit" variant="primary">
                                        Adicionar Cliente
                                    </Button>
                                </Modal.Footer>
                            </FormikForm>
                        </Formik>
                    </Modal.Body>
                </Modal>
            </Container>
        </>
    )
}

export default Add
