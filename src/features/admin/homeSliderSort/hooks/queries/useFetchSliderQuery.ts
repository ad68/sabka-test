import { useQuery } from '@tanstack/react-query'
import { fetchSlider } from '../../api/fetchSlider'

const useFetchSliderQuery = () => {
    const { error, data, refetch, isFetching } = useQuery<any>({
        queryKey: ['admin-slider'],
        queryFn: fetchSlider,
        gcTime: 0,
        staleTime: 0
    })
    return { isFetching, error, data, refetch }
}

export default useFetchSliderQuery