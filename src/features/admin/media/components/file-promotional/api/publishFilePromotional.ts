import {useAxiosWithToken} from "@/hooks";

export const publishFilePromotional = (data:number[]): Promise<any> =>
    useAxiosWithToken.post(`/article/approve-publish`, data)
