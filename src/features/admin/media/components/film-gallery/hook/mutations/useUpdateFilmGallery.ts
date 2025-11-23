
import { useMutation } from '@tanstack/react-query'
import {updateFilmGallery} from "@/features/admin/media/components/film-gallery/api/updateFilmGallery";
const useUpdateFilmGallery = () => {
    return useMutation({
        mutationFn: updateFilmGallery,
    })
}
export default useUpdateFilmGallery
