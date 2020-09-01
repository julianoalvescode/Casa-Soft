import { ActionType } from 'typesafe-actions'
import * as actions from './actions'

export type CustomerAction = ActionType<typeof actions>

export interface Customer {
    codigo: string
    nome: string
    cadastro: string
    grau: string
    idade: string
}

export interface CustomerState {
    readonly data: Customer[]
    readonly nome: string
    customer: Customer
}
