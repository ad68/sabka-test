import { useQuery } from '@tanstack/react-query'
import { fetchSliderPageable } from '../../api/fetchSliderPageable'

const useFetchSliderPageableQuery = () => {
    const { error, data, refetch, isFetching } = useQuery<any>({
        queryKey: ['admin-slider-pageable'],
        queryFn: fetchSliderPageable,
        gcTime: 0,
        staleTime: 0
    })
    return { isFetching, error, data, refetch }
}

export default useFetchSliderPageableQuery