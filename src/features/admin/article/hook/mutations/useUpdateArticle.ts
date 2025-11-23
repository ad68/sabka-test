
import { useMutation } from '@tanstack/react-query'
import {updateArticle} from "@/features/admin/article/api/updateArticle";
const useUpdateArticle = () => {
    return useMutation({
        mutationFn: updateArticle,
    })
}
export default useUpdateArticle
