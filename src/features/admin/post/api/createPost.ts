import { useAxiosWithToken } from "@/hooks";
export const createPost = ({ data }: { data: any }): Promise<any> =>
    useAxiosWithToken.post(`/article/add`, data)
