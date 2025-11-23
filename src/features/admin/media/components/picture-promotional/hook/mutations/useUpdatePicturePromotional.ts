
import { useMutation } from '@tanstack/react-query'
import {
    updatePicturePromotional
} from "@/features/admin/media/components/picture-promotional/api/updatePicturePromotional";
const useUpdatePicturePromotional = () => {
    return useMutation({
        mutationFn: updatePicturePromotional,
    })
}
export default useUpdatePicturePromotional
