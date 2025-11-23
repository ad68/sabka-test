import {useAxiosWithToken} from "@/hooks";

export const publishNotice = (data:number[]): Promise<any> =>
    useAxiosWithToken.post(`/article/approve-publish`, data)
