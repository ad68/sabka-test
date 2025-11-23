import { useQuery } from '@tanstack/react-query'
import { fetchPublication } from '../../api/fetchPublication'

const useFetchPublicationQuery = (pageNumber: number) => {
  const { error, data, refetch, isFetching } = useQuery<any>({
    queryKey: ['website-publication'],
    queryFn: () => fetchPublication(pageNumber),
    gcTime: 0,
    staleTime: 0
  })
  return { isFetching, error, data, refetch }
}

export default useFetchPublicationQuery