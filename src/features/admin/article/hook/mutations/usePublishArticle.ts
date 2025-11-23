
import { useMutation } from '@tanstack/react-query'
import {publishArticle} from "@/features/admin/article/api/publishArticle";
const usePublishArticle = () => {
    return useMutation({
        mutationFn: publishArticle,
    })
}
export default usePublishArticle
