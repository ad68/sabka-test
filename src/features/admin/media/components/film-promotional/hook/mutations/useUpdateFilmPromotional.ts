
import { useMutation } from '@tanstack/react-query'
import {updateFilmPromotional} from "@/features/admin/media/components/film-promotional/api/updateFilmPromotional";
const useUpdateFilmPromotional = () => {
    return useMutation({
        mutationFn: updateFilmPromotional,
    })
}
export default useUpdateFilmPromotional
