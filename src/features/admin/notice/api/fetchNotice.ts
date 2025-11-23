import { useAxiosWithToken } from '@/hooks'
import {NoticesResponse} from "@/features/admin/notice/types";

export const fetchNotice = async (id: number | undefined) => {
    const response: NoticesResponse = await useAxiosWithToken.get(`/article/search/${id}`)
    return response
}