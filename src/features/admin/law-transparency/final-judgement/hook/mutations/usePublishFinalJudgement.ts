
import { useMutation } from '@tanstack/react-query'
import {publishFinalJudgement} from "@/features/admin/law-transparency/final-judgement/api/publishFinalJudgement";
const usePublishFinalJudgement = () => {
    return useMutation({
        mutationFn: publishFinalJudgement,
    })
}
export default usePublishFinalJudgement
