
import { useMutation } from '@tanstack/react-query'
import {publishFilmPromotional} from "@/features/admin/media/components/film-promotional/api/publishFilmPromotional";
const usePublishFilmPromotional = () => {
    return useMutation({
        mutationFn: publishFilmPromotional,
    })
}
export default usePublishFilmPromotional
