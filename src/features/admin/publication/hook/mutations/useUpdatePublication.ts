
import { useMutation } from '@tanstack/react-query'
import {updatePublication} from "@/features/admin/publication/api/updatePublication";
const useUpdatePublication = () => {
    return useMutation({
        mutationFn: updatePublication,
    })
}
export default useUpdatePublication
