import { useAxiosWithToken } from "@/hooks";
export const updateArticle = ({ data, id }: { data: FormData, id: number }): Promise<any> =>
    useAxiosWithToken.put(`/article/edit/${id}`, data)
