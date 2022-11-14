import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://pro-api.coinmarketcap.com/v1'
})

const apiKey = '0e5555ab-0015-437d-9170-f4c5d69263da'


export const getData = () => {
    const url = '/cryptocurrency/map?CMC_PRO_API_KEY=' + apiKey;
    return api.get(url)
}
