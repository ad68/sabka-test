import { useAxios } from '@/hooks'
import { GlobalResponse } from '@/types/api/responses'
export const fetchEmployees = async () => {
    const response: GlobalResponse<any> = await useAxios.get(`/managerInfo/search-with-pageable?pageSize=100&pageNumber=0`)
    return response.data
}