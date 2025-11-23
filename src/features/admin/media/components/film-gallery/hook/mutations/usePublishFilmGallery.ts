
import { useMutation } from '@tanstack/react-query'
import {publishFilmGallery} from "@/features/admin/media/components/film-gallery/api/publishFilmGallery";
const usePublishFilmGallery = () => {
    return useMutation({
        mutationFn: publishFilmGallery,
    })
}
export default usePublishFilmGallery
