import { useAxiosWithToken } from "@/hooks";
export const createNotice = ({ data }: { data: any }): Promise<any> =>
    useAxiosWithToken.post(`/article/add`, data)
