
import { useMutation } from '@tanstack/react-query'
import {publishPublication} from "@/features/admin/publication/api/publishPublication";
const usePublishPublication = () => {
    return useMutation({
        mutationFn: publishPublication,
    })
}
export default usePublishPublication
