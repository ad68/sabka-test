import { useAxiosWithToken } from '@/hooks'
import {ComplaintResponse} from "@/features/admin/complaint/types";

export const fetchComplaint = async (id: number | undefined) => {
    const response: ComplaintResponse = await useAxiosWithToken.get(`/complaint/search/${id}`)
    return response
}