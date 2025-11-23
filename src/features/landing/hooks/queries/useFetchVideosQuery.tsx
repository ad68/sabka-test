import { useQuery } from '@tanstack/react-query'
import { FetchGalleryResponse } from '../../types'
import { fetchVideos } from '../../api/fetchVideos'
const useFetchVideosQuery = () => {
    const { error, data, refetch, isFetching } = useQuery<FetchGalleryResponse>({
        queryKey: ['video-gallery'],
        queryFn: () => fetchVideos(),
        gcTime: 1000 * 60 * 1000,
        staleTime: 1000 * 60 * 2
    })
    return { isFetching, error, data, refetch }
}

export default useFetchVideosQuery