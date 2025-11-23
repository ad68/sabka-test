import { useQuery } from '@tanstack/react-query'
import { fetchPhotos } from '../../api/fetchPhotos'

const useFetchPhotosQuery = (pageNumber: number) => {
    const { error, data, refetch, isFetching } = useQuery<any>({
        queryKey: ['webSitePhotosGallery'],
        queryFn: () => fetchPhotos(pageNumber),
        gcTime: 0,
        staleTime: 0
    })
    return { isFetching, error, data, refetch }
}

export default useFetchPhotosQuery