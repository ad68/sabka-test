import { useMutation } from '@tanstack/react-query'
import {createComplaint} from "@/features/admin/complaint/api/createComplaint";
const useAddComplaint = () => {
    return useMutation({
        mutationFn: createComplaint,
    })
}
export default useAddComplaint
