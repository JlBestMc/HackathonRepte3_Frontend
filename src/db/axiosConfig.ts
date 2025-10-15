import axios from 'axios'
import { APIBASEURL } from '@/config/config'

const apiData = axios.create({
    baseURL: APIBASEURL,
    timeout: 10000,
})

export { apiData }
