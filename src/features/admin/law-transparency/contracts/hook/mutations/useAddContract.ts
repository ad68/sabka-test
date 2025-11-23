
import { useMutation } from '@tanstack/react-query'
import {createContract} from "@/features/admin/law-transparency/contracts/api/createContract";
const useAddContract = () => {
    return useMutation({
        mutationFn: createContract,
    })
}
export default useAddContract
