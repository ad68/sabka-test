import { useAxios } from '@/hooks'
import { GlobalResponse } from '@/types/api/responses'


export const fetchContract = async () => {
    const response: GlobalResponse<any> = await useAxios.get(`/contract/search-with-pageable?pageSize=20&pageNumber=0`)
    return response.data
}