import {useAxiosWithToken} from "@/hooks";

export const publishFinancialInfo = (data:number[]): Promise<any> =>
    useAxiosWithToken.post(`/media/file/approve-publish`, data)
