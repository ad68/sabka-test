
import { useMutation } from '@tanstack/react-query'
import {updateFinancialInfo} from "@/features/admin/media/components/financial-info/api/updateFinancialInfo";
const useUpdateFinancialInfo = () => {
    return useMutation({
        mutationFn: updateFinancialInfo,
    })
}
export default useUpdateFinancialInfo
