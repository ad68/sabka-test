
import { useMutation } from '@tanstack/react-query'
import {updatePictureGallery} from "@/features/admin/media/components/picture-gallery/api/updatePictureGallery";
const useUpdatePictureGallery = () => {
    return useMutation({
        mutationFn: updatePictureGallery,
    })
}
export default useUpdatePictureGallery
