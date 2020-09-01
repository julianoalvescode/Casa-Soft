import { takeLatest, call, put, all } from 'redux-saga/effects'
import { ActionType } from 'typesafe-actions'
import * as actions from './actions'
import api from '../../../services/api'
import { toast } from 'react-toastify'

export function* load() {
    try {
        const { data } = yield call(api.get, '')

        yield put(actions.loadSuccess(data))
    } catch (err) {
        yield put(actions.requestFailure())
    }
}

export function* remove({
    payload,
}: ActionType<typeof actions.removeCustomer>) {
    try {
        const { userId } = payload

        yield call(api.delete, `/${userId}`)

        const { data } = yield call(api.get, '')

        yield put(actions.loadSuccess(data))
        toast.success('Cliente removido com sucesso', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
    } catch (err) {
        yield put(actions.requestFailure())
        toast.error('Não foi possível realizar a operação', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
    }
}

export function* addUser({ payload }: ActionType<typeof actions.addCustomer>) {
    try {
        const { newCustomer } = payload

        yield call(api.post, '', newCustomer)

        const { data } = yield call(api.get, '')

        yield put(actions.loadSuccess(data))
        toast.success('Cliente adicionado', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
    } catch (err) {
        yield put(actions.requestFailure())
        toast.error('Não foi possível realizar a operação', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
    }
}

export function* getCustomer({
    payload,
}: ActionType<typeof actions.getCustomer>) {
    try {
        const { userId } = payload

        const { data } = yield call(api.get, `/${userId}`)

        yield put(actions.getCustomerSuccess(data))
    } catch (err) {
        yield put(actions.requestFailure())
    }
}

export function* editUser({
    payload,
}: ActionType<typeof actions.editCustomer>) {
    try {
        const { newCustomer, userId } = payload

        yield call(api.put, `/${userId}`, newCustomer)

        const { data } = yield call(api.get, '')

        yield put(actions.loadSuccess(data))
        toast.success('Cliente editado com sucesso', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
    } catch (err) {
        yield put(actions.requestFailure())
        toast.error('Não foi possível realizar a operação', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
    }
}

export default all([
    takeLatest('@customers/LOAD_REQUEST', load),
    takeLatest('@customers/REMOVE_REQUEST', remove),
    takeLatest('@customers/ADD_REQUEST', addUser),
    takeLatest('@customers/EDIT_REQUEST', editUser),
    takeLatest('@customers/GET_CUSTOMER', getCustomer),
])
