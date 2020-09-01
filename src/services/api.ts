import axios from 'axios'

const api = axios.create({
    baseURL: 'https://5f4c35f1ea007b0016b1de55.mockapi.io/casa/users',
})

export default api
