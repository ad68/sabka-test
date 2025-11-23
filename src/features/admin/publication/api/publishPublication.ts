import {useAxiosWithToken} from "@/hooks";

export const publishPublication = (data:number[]): Promise<any> =>
    useAxiosWithToken.post(`/article/approve-publish`, data)
