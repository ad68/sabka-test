
import { useMutation } from '@tanstack/react-query'
import {createFinalJudgement} from "@/features/admin/law-transparency/final-judgement/api/createFinalJudgement";
const useAddFinalJudgement = () => {
    return useMutation({
        mutationFn: createFinalJudgement,
    })
}
export default useAddFinalJudgement
