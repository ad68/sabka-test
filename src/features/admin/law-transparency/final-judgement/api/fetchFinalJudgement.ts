import { useAxiosWithToken } from '@/hooks'
import {FinalJudgementsResponse} from "@/features/admin/law-transparency/final-judgement/types";

export const fetchFinalJudgement = async (id: number | undefined) => {
    const response: FinalJudgementsResponse = await useAxiosWithToken.get(`/judgment/search/${id}`)
    return response
}