import { useAxiosWithToken } from '@/hooks'
import { GlobalResponse } from '@/types/api/responses'

export const fetchSliderPageable = async () => {
    const response: GlobalResponse<any> = await useAxiosWithToken.get(`/slider/search-with-pageable?pageSize=10&pageNumber=0`)
    return response.data
}