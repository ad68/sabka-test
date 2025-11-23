import { useAxiosWithToken } from '@/hooks'
import {PostsResponse} from "@/features/admin/post/types";

export const fetchPost = async (id: number | undefined) => {
    const response: PostsResponse = await useAxiosWithToken.get(`/article/search/${id}`)
    return response
}