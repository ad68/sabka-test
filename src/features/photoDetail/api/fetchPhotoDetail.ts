import { useAxios } from '@/hooks'
import { GlobalResponse } from '@/types/api/responses'

export const fetchPhotoDetail = async (id: number | undefined) => {
    const response: GlobalResponse<any> = await useAxios.get(`/media/file/search/${id}?documentType=PICTURE`)
    return response.data
}