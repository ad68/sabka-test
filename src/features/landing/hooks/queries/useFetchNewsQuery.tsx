import { useQuery } from '@tanstack/react-query'
import { fetchNews } from '../../api/fetchNews'
import { FetchNewsResponse } from '../../types'
const useFetchNewsQuery = () => {
    const { error, data, refetch, isFetching } = useQuery<FetchNewsResponse>({
        queryKey: ['home-news'],
        queryFn: () => fetchNews(),
        gcTime: 1000 * 60 * 1000,
        staleTime: 1000 * 60 * 2
    })
    return { isFetching, error, data, refetch }
}

export default useFetchNewsQuery