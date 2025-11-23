
import { useMutation } from '@tanstack/react-query'
import {createFilePromotional} from "@/features/admin/media/components/file-promotional/api/createFilePromotional";
const useAddFilePromotional = () => {
    return useMutation({
        mutationFn: createFilePromotional,
    })
}
export default useAddFilePromotional
