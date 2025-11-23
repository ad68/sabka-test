
import { GlobalResponse } from '@/types/api/responses'
import axios from 'axios'

export const fetchProvinces = async () => {
    const response: GlobalResponse<any> = await axios.get(`https://api.tazminmashin.com/tazmin/tazmin-mashin/basic-information/search-provinces`)
    return response.data
}