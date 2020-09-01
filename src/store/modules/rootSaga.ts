import { all } from 'redux-saga/effects'

import customers from './customers/sagas'

export default function* rootSaga() {
    return yield all([customers])
}
