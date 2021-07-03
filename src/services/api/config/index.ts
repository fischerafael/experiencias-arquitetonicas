import axios from 'axios'

const env = {
    local: 'http://localhost:1337',
    production: 'https://ux-arch-strapi.herokuapp.com'
}

export const api = axios.create({
    baseURL: env.production
})

const localAPIPrediction = 'http://localhost:3333'
const prodAPIPrediction = 'https://exp-arq.herokuapp.com'

export const apiPrediction = axios.create({
    baseURL: prodAPIPrediction
})
