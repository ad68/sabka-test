
import { useMutation } from '@tanstack/react-query'
import {
    createPicturePromotional
} from "@/features/admin/media/components/picture-promotional/api/createPicturePromotional";
const useAddPicturePromotional = () => {
    return useMutation({
        mutationFn: createPicturePromotional,
    })
}
export default useAddPicturePromotional
