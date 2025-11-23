import { useQuery } from '@tanstack/react-query'
import { fetchPromotionalGallery } from '../../api/fetchPromotionalGallery'
const useFetchPromotionalGalleryQuery = (pageNumber: number) => {
    const { error, data, refetch, isFetching } = useQuery<any>({
        queryKey: ['webSitePromotionalGallery'],
        queryFn: () => fetchPromotionalGallery(pageNumber),
        gcTime: 0,
        staleTime: 0
    })
    return { isFetching, error, data, refetch }
}

export default useFetchPromotionalGalleryQuery