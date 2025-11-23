import { useQuery } from '@tanstack/react-query'
import { fetchVideos } from '../../api/fetchVideos'
const useFetchVideosQuery = (pageNumber: number) => {
    const { error, data, refetch, isFetching } = useQuery<any>({
        queryKey: ['webSiteVideosGallery'],
        queryFn: () => fetchVideos(pageNumber),
        gcTime: 0,
        staleTime: 0
    })
    return { isFetching, error, data, refetch }
}

export default useFetchVideosQuery