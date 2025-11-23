import { useAxios } from '@/hooks'
import { GlobalResponse } from '@/types/api/responses'
import { FetchNewsResponse } from '../types'
export const fetchNews = async (pageNumber: number) => {
    const response: GlobalResponse<FetchNewsResponse> = await useAxios.get(`/article/search-with-pageable?articleTypeEnum=POST&pageSize=10&pageNumber=${pageNumber}`)
    return response.data
}