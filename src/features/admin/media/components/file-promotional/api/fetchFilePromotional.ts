import { useAxiosWithToken } from '@/hooks'
import {MediaResponse} from "@/features/admin/media/types";

export const fetchFilePromotional = async (id: number | undefined) => {
    const response: MediaResponse = await useAxiosWithToken.get(`/media/file/${id}`)
    return response
}