import { useQuery } from '@tanstack/react-query'
import { fetchProvinces } from '../../api/fetchProvinces'

const useFetchProvincesQuery = () => {
    const { error, data, refetch, isFetching } = useQuery<any>({
        queryKey: ['provinces'],
        queryFn: fetchProvinces,
        gcTime: 0,
        staleTime: 0
    })
    return { isFetching, error, data, refetch }
}

export default useFetchProvincesQuery