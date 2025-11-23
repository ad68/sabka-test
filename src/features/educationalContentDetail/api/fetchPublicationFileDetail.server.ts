'use server'
import { useAxios } from '@/hooks'
import { GlobalResponse } from '@/types/api/responses'

export const fetchPublicationFileDetail = async (publicationFileId: string | undefined) => {
    try {
        const result: GlobalResponse<any> = await useAxios.get(
            `/media/file/search/${publicationFileId}`,
        )
        return result.data
    } catch (error) {
        throw error
    }
}


