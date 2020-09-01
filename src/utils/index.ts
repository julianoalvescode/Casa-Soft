import moment from 'moment'

import { Degree } from './types'

function getDegree(v: Degree) {
    // eslint-disable-next-line no-eval
    const grau = eval(`${v.q1} + ${v.q2} + ${v.q3} + ${v.q4}`)

    return grau
}

function getDegreeDate(v: string, date: string) {
    const expi = moment().diff(moment(date), 'months') >= 4

    let grau = parseFloat(v)
    let grauExact = ''

    if (expi) {
        // eslint-disable-next-line no-eval
        grau = eval(`${v} - 8`)
    }

    if (grau <= 0) {
        grau = 0
    }

    if (grau >= 30 && grau <= 50) {
        grauExact = 'Baixo'
    } else if (grau >= 15 && grau <= 29) {
        grauExact = 'Moderado'
    } else if (grau >= 0 && grau <= 14) {
        grauExact = 'Alto'
    } else if (grau === 0) {
        grauExact = 'Alto'
    }

    return grauExact
}

export { getDegree, getDegreeDate }
