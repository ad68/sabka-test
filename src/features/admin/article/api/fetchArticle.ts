import { useAxiosWithToken } from '@/hooks'
import {ArticlesResponse} from "@/features/admin/article/types";

export const fetchArticle = async (id: number | undefined) => {
    const response: ArticlesResponse = await useAxiosWithToken.get(`/article/search/${id}`)
    return response
}