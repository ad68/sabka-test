import { useAxios } from '@/hooks'
import { GlobalResponse } from '@/types/api/responses'
import { FetchNoticeResponse } from '../types'
export const fetchNotice = async (pageNumber: number) => {
    const response: GlobalResponse<FetchNoticeResponse> = await useAxios.get(`/article/search-with-pageable?articleTypeEnum=NOTICE&pageSize=10&pageNumber=${pageNumber}`)
    return response.data
}