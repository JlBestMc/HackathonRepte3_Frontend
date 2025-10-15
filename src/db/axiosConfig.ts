import axios from 'axios'
// import { APIBASEURL } from '@/config/config'

const apiData = axios.create({
    baseURL: 'https://hackatorepte3.onrender.com/hydraulic/api/v1',
    // headers: HEADERSCONFIG,
    timeout: 10000,
})

export { apiData }
