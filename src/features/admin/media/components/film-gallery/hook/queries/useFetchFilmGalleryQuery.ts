
import { useQuery } from '@tanstack/react-query'
import {fetchFilmGallery} from "@/features/admin/media/components/film-gallery/api/fetchFilmGallery";

const useFetchFilmGalleryQuery = (id: number | undefined) => {
    const { error, data, refetch, isFetching } = useQuery({
        queryKey: ['film-galley', id],
        queryFn: () => fetchFilmGallery(id),
        staleTime: 0
    })
    return { isFetching, error, data, refetch }
}

export default useFetchFilmGalleryQuery