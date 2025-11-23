import { useMutation } from '@tanstack/react-query'
import {updateComplaint} from "@/features/admin/complaint/api/updateComplaint";
const useUpdateComplaint = () => {
    return useMutation({
        mutationFn: updateComplaint,
    })
}
export default useUpdateComplaint
