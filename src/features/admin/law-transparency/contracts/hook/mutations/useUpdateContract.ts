
import { useMutation } from '@tanstack/react-query'
import {updateContract} from "@/features/admin/law-transparency/contracts/api/updateContract";
const useUpdateContract = () => {
    return useMutation({
        mutationFn: updateContract,
    })
}
export default useUpdateContract
