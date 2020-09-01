import { combineReducers } from 'redux'

import { StoreState } from '../createStore'

import customers from './customers/reducer'

export default combineReducers<StoreState>({
    customers,
})
