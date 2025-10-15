import { apiData } from '@/db/axiosConfig'
import { ConnectionError } from '@/lib/errorsHandlers'
import { AxiosError } from 'axios'

// Neighborhoods
export const getNeighborhoods = async () => {
    try {
        const response = await apiData.get(`/data`)
        return response.data
    } catch (error) {
        if (error instanceof AxiosError) {
            throw new ConnectionError(
                `${error.response?.status || 'Network Error'}`
            )
        }
        throw new ConnectionError('Network Error')
    }
}

// Averages by district
export const getAverages = async () => {
    try {
        const response = await apiData.get(`/averages`)
        return response.data as Record<string, number>
    } catch (error) {
        if (error instanceof AxiosError) {
            throw new ConnectionError(
                `${error.response?.status || 'Network Error'}`
            )
        }
        throw new ConnectionError('Network Error')
    }
}
