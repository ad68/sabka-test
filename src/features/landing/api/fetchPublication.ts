import { useAxios } from '@/hooks'
import { GlobalResponse } from '@/types/api/responses'
import { FetchNewsResponse } from '../types'
export const fetchPublication = async () => {
    const response: GlobalResponse<FetchNewsResponse> = await useAxios.get(`/article/search-with-pageable?articleTypeEnum=PUBLICATION&pageSize=20&pageNumber=0`)
    return response.data
}