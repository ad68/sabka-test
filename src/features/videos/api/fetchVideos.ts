import { useAxios } from '@/hooks'
import { GlobalResponse } from '@/types/api/responses'

export const fetchVideos = async (pageNumber: number) => {
    const response: GlobalResponse<any> = await useAxios.get(`/media/file/search-with-pageable?pageNumber=${pageNumber}&pageSize=9&documentType=FILM&mediaType=VIDEO_GALLERY`)
    return response.data
}