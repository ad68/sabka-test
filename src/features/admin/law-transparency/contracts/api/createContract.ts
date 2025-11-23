import { useAxiosWithToken } from "@/hooks";
export const createContract = ({ data }: { data: any }): Promise<any> =>
    useAxiosWithToken.post(`/contract/add`, data)
