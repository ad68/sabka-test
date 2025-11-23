import { useAxiosWithToken } from "@/hooks";
export const createFinalJudgement = ({ data }: { data: any }): Promise<any> =>
    useAxiosWithToken.post(`/judgment/add`, data)
