
import { useMutation } from '@tanstack/react-query'
import {createPost} from "@/features/admin/post/api/createPost";
const useAddPost = () => {
    return useMutation({
        mutationFn: createPost,
    })
}
export default useAddPost
