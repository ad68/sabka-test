import { useQuery } from '@tanstack/react-query'
import { FetchGalleryResponse } from '../../types'
import { fetchGallery } from '../../api/fetchGallery'
const useFetchGalleryQuery = () => {
    const { error, data, refetch, isFetching } = useQuery<FetchGalleryResponse>({
        queryKey: ['home-gallery'],
        queryFn: () => fetchGallery(),
        gcTime: 1000 * 60 * 1000,
        staleTime: 1000 * 60 * 2
    })
    return { isFetching, error, data, refetch }
}

export default useFetchGalleryQuery