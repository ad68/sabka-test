
import { useMutation } from '@tanstack/react-query'
import {publishFileGallery} from "@/features/admin/media/components/file-gallery/api/publishFileGallery";
const usePublishFileGallery = () => {
    return useMutation({
        mutationFn: publishFileGallery,
    })
}
export default usePublishFileGallery
