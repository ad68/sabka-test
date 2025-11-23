import {useAxiosWithToken} from "@/hooks";

export const publishFinalJudgement = (data:number[]): Promise<any> =>
    useAxiosWithToken.post(`/judgment/approve-publish`, data)
