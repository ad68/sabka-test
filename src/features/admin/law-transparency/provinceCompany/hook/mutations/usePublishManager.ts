
import { useMutation } from '@tanstack/react-query'
import {publishManager} from "@/features/admin/law-transparency/managers-info/api/publishManager";
const usePublishManager = () => {
    return useMutation({
        mutationFn: publishManager,
    })
}
export default usePublishManager
