import { useAxiosWithToken } from "@/hooks";
export const createFinancialInfo = ({ data }: { data: any }): Promise<any> =>
    useAxiosWithToken.post(`/media/file/add`, data)
