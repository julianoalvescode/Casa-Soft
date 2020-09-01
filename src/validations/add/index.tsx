import * as yup from 'yup'

const validations = yup.object().shape({
    name: yup.string().required('Nome obrigatório'),
    age: yup.string().required('Idade obrigatória'),
    q1: yup.string().required('Pergunta obrigatória'),
    q2: yup.string().required('Pergunta obrigatória'),
    q3: yup.string().required('Pergunta obrigatória'),
    q4: yup.string().required('Pergunta obrigatória'),
})

export default validations
