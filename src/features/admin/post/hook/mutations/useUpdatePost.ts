
import { useMutation } from '@tanstack/react-query'
import {updatePost} from "@/features/admin/post/api/updatePost";
const useUpdatePost = () => {
    return useMutation({
        mutationFn: updatePost,
    })
}
export default useUpdatePost
