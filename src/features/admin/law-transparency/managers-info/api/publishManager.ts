import {useAxiosWithToken} from "@/hooks";

export const publishManager = (data:number[]): Promise<any> =>
    useAxiosWithToken.post(`/managerInfo/approve-publish`, data)
