import { useQuery } from '@tanstack/react-query'
import { fetchNotice } from '../../api/fetchNotice'
import { FetchNoticeResponse } from '../../types'
const useFetchNoticeQuery = (pageNumber: number) => {
    const { error, data, refetch, isFetching } = useQuery<FetchNoticeResponse>({
        queryKey: ['home-notice'],
        queryFn: () => fetchNotice(pageNumber),
        gcTime: 0,
        staleTime: 0
    })
    return { isFetching, error, data, refetch }
}

export default useFetchNoticeQuery