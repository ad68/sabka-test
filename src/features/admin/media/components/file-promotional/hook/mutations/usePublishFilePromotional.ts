
import { useMutation } from '@tanstack/react-query'
import {publishFilePromotional} from "@/features/admin/media/components/file-promotional/api/publishFilePromotional";

const usePublishFilePromotional = () => {
    return useMutation({
        mutationFn: publishFilePromotional,
    })
}
export default usePublishFilePromotional
