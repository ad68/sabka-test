import { useQuery } from '@tanstack/react-query'
import { fetchNews } from '../../api/fetchNews'
import { FetchNewsResponse } from '../../types'
const useFetchNewsQuery = (pageNumber: number) => {
    const { error, data, refetch, isFetching } = useQuery<FetchNewsResponse>({
        queryKey: ['home-news'],
        queryFn: () => fetchNews(pageNumber),
        gcTime: 0,
        staleTime: 0
    })
    return { isFetching, error, data, refetch }
}

export default useFetchNewsQuery