import { useAxiosWithToken } from '@/hooks'
import { GlobalResponse } from '@/types/api/responses'

export const fetchPromotionalVideos = async (pageNumber: number) => {
    const response: GlobalResponse<any> = await useAxiosWithToken.get(`/media/file/search-with-pageable?pageNumber=${pageNumber}&pageSize=10&documentType=FILM&mediaType=PROMOTIONAL_MEDIA`)
    return response.data
}


