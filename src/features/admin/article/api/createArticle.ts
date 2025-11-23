import { useAxiosWithToken } from "@/hooks";
export const createArticle = ({ data }: { data: any }): Promise<any> =>
    useAxiosWithToken.post(`/article/add`, data)
