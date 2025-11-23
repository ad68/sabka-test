
import { useMutation } from '@tanstack/react-query'
import {createManager} from "@/features/admin/law-transparency/managers-info/api/createManager";
const useAddManager = () => {
    return useMutation({
        mutationFn: createManager,
    })
}
export default useAddManager
