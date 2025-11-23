import { useAxiosWithToken } from '@/hooks'
import {FinancialInfoResponse} from "@/features/admin/media/components/financial-info/types";

export const fetchFinancialInfo = async (id: number | undefined) => {
    const response: FinancialInfoResponse = await useAxiosWithToken.get(`/media/file/${id}`)
    return response
}