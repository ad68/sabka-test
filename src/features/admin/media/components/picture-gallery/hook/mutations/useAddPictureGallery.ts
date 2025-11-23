
import { useMutation } from '@tanstack/react-query'
import {createPictureGallery} from "@/features/admin/media/components/picture-gallery/api/createPictureGallery";
const useAddPictureGallery = () => {
    return useMutation({
        mutationFn: createPictureGallery,
    })
}
export default useAddPictureGallery
