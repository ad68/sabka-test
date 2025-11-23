import { useQuery } from '@tanstack/react-query'
import { fetchPromotionalVideos } from '../../api/fetchPromotionalVideos'
const useFetchPromotionalVideosQuery = (pageNumber: number) => {
    const { error, data, refetch, isFetching } = useQuery<any>({
        queryKey: ['webSiteVideosGallery'],
        queryFn: () => fetchPromotionalVideos(pageNumber),
        gcTime: 0,
        staleTime: 0
    })
    return { isFetching, error, data, refetch }
}

export default useFetchPromotionalVideosQuery