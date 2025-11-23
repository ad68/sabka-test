
import { useMutation } from '@tanstack/react-query'
import {updateFileGallery} from "@/features/admin/media/components/file-gallery/api/updateFileGallery";
const useUpdateFileGallery = () => {
    return useMutation({
        mutationFn: updateFileGallery,
    })
}
export default useUpdateFileGallery
