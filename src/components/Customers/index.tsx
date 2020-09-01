import React, { useState, useEffect } from 'react'

import Add from '../Add'
import { Container } from '../../styles/components/Table'

import { getDegree, getDegreeDate } from '../../utils'

import moment from 'moment'

import validations from '../../validations/add'
import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik'

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { Form } from 'react-bootstrap'

import { useDispatch, useSelector } from 'react-redux'
import { StoreState } from '../../store/createStore'

import { FaUserEdit, FaBan } from 'react-icons/fa'

const Customers: React.FC = () => {
    const dispatch = useDispatch()

    const [userEdit, SetEdit] = useState('')
    const [show, SetShow] = useState(false)

    const handleOpen = () => SetShow(true)
    const handleClose = () => SetShow(false)

    const { data, customer } = useSelector(
        (state: StoreState) => state.customers,
    )

    useEffect(() => {
        dispatch({ type: '@customers/LOAD_REQUEST' })
    }, [dispatch])

    const handleForm = async (v: any, userId: string) => {
        try {
            await handleClose()

            moment.locale('pt-br')
            const date = moment().format('DD-MM-YYYY')
            const grau = getDegree({ q1: v.q1, q2: v.q2, q3: v.q3, q4: v.q4 })

            dispatch({
                type: '@customers/EDIT_REQUEST',
                payload: {
                    newCustomer: {
                        nome: v.name,
                        idade: v.age,
                        grau: grau,
                        cadastro: date,
                    },
                    userId: userId,
                },
            })
        } catch (e) {}
    }

    return (
        <>
            <Container>
                <div className="d-flex justify-content-center">
                    <div className="col-12 col-md-12">
                        <Add />
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Código</th>
                                    <th scope="col">Nome</th>
                                    <th scope="col">Idade</th>
                                    <th scope="col">Data de Cadastro</th>
                                    <th scope="col">Grau de Risco</th>
                                    <th scope="col">Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((i) => (
                                    <tr key={i.codigo}>
                                        <th scope="row">{i.codigo}</th>
                                        <td>{i.nome}</td>
                                        <td>{i.idade}</td>
                                        <td>{i.cadastro}</td>
                                        <td>
                                            {getDegreeDate(i.grau, i.cadastro)}
                                        </td>
                                        <td className="actions-container">
                                            <FaUserEdit
                                                onClick={async () => {
                                                    SetEdit(i.codigo)
                                                    dispatch({
                                                        type:
                                                            '@customers/GET_CUSTOMER',
                                                        payload: {
                                                            userId: i.codigo,
                                                        },
                                                    })
                                                    handleOpen()
                                                }}
                                                size={16}
                                            />
                                            <FaBan
                                                onClick={() =>
                                                    dispatch({
                                                        type:
                                                            '@customers/REMOVE_REQUEST',
                                                        payload: {
                                                            userId: i.codigo,
                                                        },
                                                    })
                                                }
                                                size={16}
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </Container>
            <Modal onHide={handleClose} show={show}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar Usuário</Modal.Title>
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
                        onSubmit={(v) => handleForm(v, userEdit)}
                    >
                        <FormikForm>
                            <h3>{customer.nome}</h3>
                            <h5 className="mb-4">Código {customer.codigo}</h5>
                            <Form>
                                <Form.Group>
                                    <Form.Label>Nome</Form.Label>
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
        </>
    )
}

export default Customers
