
import { useMutation } from '@tanstack/react-query'
import {updateNotice} from "@/features/admin/notice/api/updateNotice";
const useUpdateNotice = () => {
    return useMutation({
        mutationFn: updateNotice,
    })
}
export default useUpdateNotice
