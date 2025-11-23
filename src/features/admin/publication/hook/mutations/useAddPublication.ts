
import { useMutation } from '@tanstack/react-query'
import {createPublication} from "@/features/admin/publication/api/createPublication";
const useAddPublication = () => {
    return useMutation({
        mutationFn: createPublication,
    })
}
export default useAddPublication
