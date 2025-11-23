import { useAxiosWithToken } from "@/hooks";
import {FinalJudgement} from "@/features/admin/law-transparency/final-judgement/types";
export const updateFinalJudgement = ({ data, id }: { data: FinalJudgement, id: number }): Promise<any> =>
    useAxiosWithToken.put(`/judgment/edit/${id}`, data)
