
import { useMutation } from '@tanstack/react-query'
import { publishPost } from "@/features/admin/post/api/publishPost";
const usePublishPost = () => {
    return useMutation({
        mutationFn: publishPost,
    })
}
export default usePublishPost


