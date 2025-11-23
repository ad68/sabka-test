import {useAxiosWithToken} from "@/hooks";

export const publishContract = (data:number[]): Promise<any> =>
    useAxiosWithToken.post(`/contract/approve-publish`, data)
