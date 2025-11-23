import { useMutation } from '@tanstack/react-query'
import {publishComplaint} from "@/features/admin/complaint/api/publishComplaint";
const usePublishComplaint = () => {
    return useMutation({
        mutationFn: publishComplaint,
    })
}
export default usePublishComplaint
