
import { useMutation } from '@tanstack/react-query'
import {createArticle} from "@/features/admin/article/api/createArticle";
const useAddArticle = () => {
    return useMutation({
        mutationFn: createArticle,
    })
}
export default useAddArticle
