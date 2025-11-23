import { useAxios } from '@/hooks'
import { GlobalResponse } from '@/types/api/responses'
import { FetchGalleryResponse } from '../types'
export const fetchGallery = async () => {
    const response: GlobalResponse<FetchGalleryResponse> = await useAxios.get(`/media/file/search-with-pageable?pageSize=20&pageNumber=0&documentType=PICTURE&mediaType=VIDEO_GALLERY`)
    return response.data
}