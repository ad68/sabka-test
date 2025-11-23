
import { useMutation } from '@tanstack/react-query'
import {createFilmGallery} from "@/features/admin/media/components/film-gallery/api/createFilmGallery";
const useAddFilmGallery = () => {
    return useMutation({
        mutationFn: createFilmGallery,
    })
}
export default useAddFilmGallery
