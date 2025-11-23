
import { useMutation } from '@tanstack/react-query'
import {updateFinalJudgement} from "@/features/admin/law-transparency/final-judgement/api/updateFinalJudgement";
const useUpdateFinalJudgement = () => {
    return useMutation({
        mutationFn: updateFinalJudgement,
    })
}
export default useUpdateFinalJudgement
