import { useAxiosWithToken } from "@/hooks";
export const createPublication = ({ data }: { data: any }): Promise<any> =>
    useAxiosWithToken.post(`/article/add`, data)
