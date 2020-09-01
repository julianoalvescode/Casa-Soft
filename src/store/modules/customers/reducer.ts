import { CustomerState, CustomerAction } from './types'

const initialState: CustomerState = {
    data: [],
    customer: { codigo: '', cadastro: '', nome: '', grau: '', idade: '' },
    nome: 'Juliano',
}

export default function customers(
    state = initialState,
    action: CustomerAction,
): CustomerState {
    switch (action.type) {
        case '@customers/LOAD_REQUEST':
            return {
                ...state,
            }
        case '@customers/LOAD_SUCCESS':
            return {
                ...state,
                data: action.payload.data,
            }
        case '@customers/REQUEST_FAILURE':
            return {
                ...state,
            }
        case '@customer/REQUEST_SUCCESS':
            return {
                ...state,
                customer: action.payload.data,
            }
        default:
            return state
    }
}
