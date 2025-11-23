
import { useMutation } from '@tanstack/react-query'
import {updateFilePromotional} from "@/features/admin/media/components/file-promotional/api/updateFilePromotional";

const useUpdateFilePromotional = () => {
    return useMutation({
        mutationFn: updateFilePromotional,
    })
}
export default useUpdateFilePromotional
