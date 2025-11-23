import {useAxiosWithToken} from "@/hooks";

export const publishComplaint = (data:number[]): Promise<any> =>
    useAxiosWithToken.post(`/complaint/approve-publish`, data)
