import { useAxiosWithToken } from '@/hooks'
import {PublicationsResponse} from "@/features/admin/publication/types";

export const fetchPublication = async (id: number | undefined) => {
    const response: PublicationsResponse = await useAxiosWithToken.get(`/article/search/${id}`)
    return response
}