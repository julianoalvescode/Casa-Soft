import { action } from 'typesafe-actions'

import { Customer } from './types'

export function loadRequest() {
    return action('@customers/LOAD_REQUEST')
}

export function getCustomer({ userId }: { userId: string }) {
    return action('@customers/GET_CUSTOMER', {
        userId,
    })
}

export function removeCustomer({ userId }: { userId: string }) {
    return action('@customers/REMOVE_REQUEST', {
        userId,
    })
}

export function addCustomer({ newCustomer }: { newCustomer: Customer }) {
    return action('@customers/ADD_REQUEST', {
        newCustomer,
    })
}

export function editCustomer({
    newCustomer,
    userId,
}: {
    newCustomer: Customer
    userId: string
}) {
    return action('@customers/EDIT_REQUEST', {
        newCustomer,
        userId,
    })
}

export function loadSuccess(data: Customer[]) {
    return action('@customers/LOAD_SUCCESS', {
        data,
    })
}

export function getCustomerSuccess(data: Customer) {
    return action('@customer/REQUEST_SUCCESS', {
        data,
    })
}

export function requestFailure() {
    return action('@customers/REQUEST_FAILURE')
}
