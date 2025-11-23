import {useAxiosWithToken} from "@/hooks";

export const publishArticle = (data:number[]): Promise<any> =>
    useAxiosWithToken.post(`/article/approve-publish`, data)
