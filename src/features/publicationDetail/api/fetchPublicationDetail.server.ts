'use server'
import { useAxios } from '@/hooks'
import { GlobalResponse } from '@/types/api/responses'
import { PublicationDetail } from '../types'
export const fetchPublicationDetail = async (publicationId: string | undefined) => {
    try {
        const result: GlobalResponse<PublicationDetail> = await useAxios.get(
            `/article/search/${publicationId}`,
        )
        return result.data
    } catch (error) {
        throw error
    }
}


