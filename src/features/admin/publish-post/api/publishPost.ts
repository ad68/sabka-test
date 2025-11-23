import { useAxiosWithToken } from "@/hooks";

export const publishPost = (data: any[]): Promise<any> =>
    useAxiosWithToken.post(`/article/approve-publish`, data)
