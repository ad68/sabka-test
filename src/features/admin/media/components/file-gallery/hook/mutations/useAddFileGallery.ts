
import { useMutation } from '@tanstack/react-query'
import {createFileGallery} from "@/features/admin/media/components/file-gallery/api/createFileGallery";
const useAddFileGallery = () => {
    return useMutation({
        mutationFn: createFileGallery,
    })
}
export default useAddFileGallery
