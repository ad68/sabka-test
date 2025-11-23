
import { useMutation } from '@tanstack/react-query'
import {publishPictureGallery} from "@/features/admin/media/components/picture-gallery/api/publishPictureGallery";
const usePublishPictureGallery = () => {
    return useMutation({
        mutationFn: publishPictureGallery,
    })
}
export default usePublishPictureGallery
