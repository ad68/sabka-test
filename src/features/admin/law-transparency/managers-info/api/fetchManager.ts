import { useAxiosWithToken } from '@/hooks'
import {ManagersResponse} from "@/features/admin/law-transparency/managers-info/types";

export const fetchManager = async (id: number | undefined) => {
    const response: ManagersResponse = await useAxiosWithToken.get(`/managerInfo/search/${id}`)
    return response
}