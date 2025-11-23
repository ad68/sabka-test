import { useQuery } from '@tanstack/react-query'
import { fetchPromotionalFiles } from '../../api/fetchPromotionalFiles'
const useFetchPromotionalFileQuery = (pageNumber: number) => {
    const { error, data, refetch, isFetching } = useQuery<any>({
        queryKey: ['webSitePromotionalFile'],
        queryFn: () => fetchPromotionalFiles(pageNumber),
        gcTime: 0,
        staleTime: 0
    })
    return { isFetching, error, data, refetch }
}

export default useFetchPromotionalFileQuery