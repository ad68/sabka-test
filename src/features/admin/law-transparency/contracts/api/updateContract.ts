import { useAxiosWithToken } from "@/hooks";

export const updateContract = ({ data, id }: { data: any, id: number }): Promise<any> =>
    useAxiosWithToken.put(`/contract/edit/${id}`, data)
