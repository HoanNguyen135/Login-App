import axios from 'axios'

const baseURL = 'https://httpbin.org'

export const api = {
    call : () => {
        return axios.create({
            baseURL
        })
    }
}
