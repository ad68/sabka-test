import { useAxiosWithToken } from '@/hooks'
import {ContractsResponse} from "@/features/admin/law-transparency/contracts/types";

export const fetchContract = async (id: number | undefined) => {
    const response: ContractsResponse = await useAxiosWithToken.get(`/contract/search/${id}`)
    return response
}