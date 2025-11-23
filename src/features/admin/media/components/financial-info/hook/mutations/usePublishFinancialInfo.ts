
import { useMutation } from '@tanstack/react-query'
import {publishFinancialInfo} from "@/features/admin/media/components/financial-info/api/publishFinancialInfo";
const usePublishFinancialInfo = () => {
    return useMutation({
        mutationFn: publishFinancialInfo,
    })
}
export default usePublishFinancialInfo
