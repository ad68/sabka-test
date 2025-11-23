
import { useMutation } from '@tanstack/react-query'
import {updateManager} from "@/features/admin/law-transparency/managers-info/api/updateManager";
const useUpdateManager = () => {
    return useMutation({
        mutationFn: updateManager,
    })
}
export default useUpdateManager
