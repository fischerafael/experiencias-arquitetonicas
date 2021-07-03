import axios from 'axios'

const env = {
    local: 'http://localhost:1337',
    production: 'https://ux-arch-strapi.herokuapp.com'
}

export const api = axios.create({
    baseURL: env.production
})

export const apiPrediction = axios.create({
    baseURL: 'https://exp-arq.herokuapp.com'
})
