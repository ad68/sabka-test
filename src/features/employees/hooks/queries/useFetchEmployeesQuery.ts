import { useQuery } from '@tanstack/react-query'
import { fetchEmployees } from '../../api/fetchEmployees'


const useFetchEmployeesQuery = () => {
    const { error, data, refetch, isFetching } = useQuery({
        queryKey: ['web-employees'],
        queryFn: fetchEmployees,
        staleTime: 0,
        gcTime: 0
    })
    return { isFetching, error, data, refetch }
}

export default useFetchEmployeesQuery