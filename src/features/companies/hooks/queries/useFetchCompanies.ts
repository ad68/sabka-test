import { useQuery } from '@tanstack/react-query'
import { fetchCompanies } from '../../api'

const useFetchCompaniesQuery = ({ id }: any) => {
  const { error, data, refetch, isFetching } = useQuery<any>({
    queryKey: ['companies', id],
    queryFn: () => fetchCompanies(id),
    gcTime: 0,
    staleTime: 0
  })
  return { isFetching, error, data, refetch }
}

export default useFetchCompaniesQuery