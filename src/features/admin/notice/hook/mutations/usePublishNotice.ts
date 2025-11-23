
import { useMutation } from '@tanstack/react-query'
import {publishNotice} from "@/features/admin/notice/api/publishNotice";
const usePublishNotice = () => {
    return useMutation({
        mutationFn: publishNotice,
    })
}
export default usePublishNotice
