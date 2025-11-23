import { useAxiosWithToken } from "@/hooks";
export const createManager = ({ data }: { data: any }): Promise<any> =>
    useAxiosWithToken.post(`/managerInfo/add`, data)
