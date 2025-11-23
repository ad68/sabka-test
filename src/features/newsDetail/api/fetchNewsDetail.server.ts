'use server'
import { useAxios } from '@/hooks'
import { GlobalResponse } from '@/types/api/responses'
import { NewsDetail } from '../types'
export const fetchNewsDetail = async (newsId: string | undefined) => {
    try {
        const result: GlobalResponse<NewsDetail> = await useAxios.get(
            `/article/search/${newsId}`,
        )
        return result.data
    } catch (error) {
        throw error
    }
}


