
import { useMutation } from '@tanstack/react-query'
import {createFinancialInfo} from "@/features/admin/media/components/financial-info/api/createFinancialInfo";
const useAddFinancialInfo = () => {
    return useMutation({
        mutationFn: createFinancialInfo,
    })
}
export default useAddFinancialInfo
