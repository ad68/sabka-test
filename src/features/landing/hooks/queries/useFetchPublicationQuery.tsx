import { useQuery } from '@tanstack/react-query'
import { FetchNewsResponse } from '../../types'
import { fetchPublication } from '../../api/fetchPublication'
const useFetchPublicationQuery = () => {
    const { error, data, refetch, isFetching } = useQuery<FetchNewsResponse>({
        queryKey: ['home-publication'],
        queryFn: () => fetchPublication(),
        gcTime: 1000 * 60 * 1000,
        staleTime: 1000 * 60 * 2
    })
    return { isFetching, error, data, refetch }
}

export default useFetchPublicationQuery