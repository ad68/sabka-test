
import { useMutation } from '@tanstack/react-query'
import {publishContract} from "@/features/admin/law-transparency/contracts/api/publishContract";
const usePublishContract = () => {
    return useMutation({
        mutationFn: publishContract,
    })
}
export default usePublishContract
