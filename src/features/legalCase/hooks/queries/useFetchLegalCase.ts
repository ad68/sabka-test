import { useQuery } from '@tanstack/react-query'
import { fetchLegalCase } from '../../api/fetchLegalCase';
const useFetchLegalCase = () => {
    const { error, data, refetch, isFetching } = useQuery({
        queryKey: ['web-legal-case'],
        queryFn: fetchLegalCase,
        staleTime: 0,
        gcTime: 0
    })
    return { isFetching, error, data, refetch }
}

export default useFetchLegalCase