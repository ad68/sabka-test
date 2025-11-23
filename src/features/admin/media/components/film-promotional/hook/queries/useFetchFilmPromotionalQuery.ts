
import { useQuery } from '@tanstack/react-query'
import {fetchFilmPromotional} from "@/features/admin/media/components/film-promotional/api/fetchFilmPromotional";

const useFetchFilmPromotionalQuery = (id: number | undefined) => {
    const { error, data, refetch, isFetching } = useQuery({
        queryKey: ['film-promotional', id],
        queryFn: () => fetchFilmPromotional(id),
        staleTime: 0
    })
    return { isFetching, error, data, refetch }
}

export default useFetchFilmPromotionalQuery