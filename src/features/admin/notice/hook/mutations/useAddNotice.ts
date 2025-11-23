
import { useMutation } from '@tanstack/react-query'
import {createNotice} from "@/features/admin/notice/api/createNotice";
const useAddNotice = () => {
    return useMutation({
        mutationFn: createNotice,
    })
}
export default useAddNotice
