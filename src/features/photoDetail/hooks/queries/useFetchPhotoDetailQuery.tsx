import { useQuery } from '@tanstack/react-query'
import { fetchPhotoDetail } from '../../api/fetchPhotoDetail'
const useFetchPhotoDetailQuery = (id: number) => {
    const { error, data, refetch, isFetching } = useQuery<any>({
        queryKey: ['webSitePhotosDetail', id],
        queryFn: () => fetchPhotoDetail(id),
        gcTime: 0,
        staleTime: 0
    })
    return { isFetching, error, data, refetch }
}

export default useFetchPhotoDetailQuery