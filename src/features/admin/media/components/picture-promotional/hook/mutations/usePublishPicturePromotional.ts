
import { useMutation } from '@tanstack/react-query'
import {
    publishPicturePromotional
} from "@/features/admin/media/components/picture-promotional/api/publishPicturePromotional";
const usePublishPicturePromotional = () => {
    return useMutation({
        mutationFn: publishPicturePromotional,
    })
}
export default usePublishPicturePromotional
