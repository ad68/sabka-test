import { useAxiosWithToken } from '@/hooks'
import { GlobalResponse } from '@/types/api/responses'

export const fetchSlider = async () => {
    const response: GlobalResponse<any> = await useAxiosWithToken.get(`/slider/sorting-with-admin`)
    return response.data
}