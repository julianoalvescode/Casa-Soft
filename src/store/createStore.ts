import { createStore, applyMiddleware, Middleware, Reducer } from 'redux'
import { CustomerAction, CustomerState } from './modules/customers/types'

export interface StoreState {
    customers: CustomerState
}

export type StoreAction = CustomerAction

export default (
    reducers: Reducer<StoreState, StoreAction>,
    middlewares: Middleware[],
) => {
    const enhancer = applyMiddleware(...middlewares)

    return createStore(reducers, enhancer)
}
