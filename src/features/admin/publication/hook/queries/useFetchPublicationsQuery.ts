
import { useQuery } from '@tanstack/react-query'
import {fetchPublication} from "@/features/admin/publication/api/fetchPublication";

const useFetchPublicationsQuery = (id: number | undefined) => {
    const { error, data, refetch, isFetching } = useQuery({
        queryKey: ['publication', id],
        queryFn: () => fetchPublication(id),
        staleTime: 0
    })
    return { isFetching, error, data, refetch }
}

export default useFetchPublicationsQuery