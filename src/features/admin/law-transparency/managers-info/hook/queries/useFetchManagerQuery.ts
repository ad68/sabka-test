
import { useQuery } from '@tanstack/react-query'
import {fetchManager} from "@/features/admin/law-transparency/managers-info/api/fetchManager";

const useFetchManagerQuery = (id: number | undefined) => {
    const { error, data, refetch, isFetching } = useQuery({
        queryKey: ['manager', id],
        queryFn: () => fetchManager(id),
        staleTime: 0
    })
    return { isFetching, error, data, refetch }
}

export default useFetchManagerQuery