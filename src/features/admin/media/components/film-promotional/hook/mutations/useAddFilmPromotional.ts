
import { useMutation } from '@tanstack/react-query'
import {createFilmPromotional} from "@/features/admin/media/components/film-promotional/api/createFilmPromotional";
const useAddFilmPromotional = () => {
    return useMutation({
        mutationFn: createFilmPromotional,
    })
}
export default useAddFilmPromotional
