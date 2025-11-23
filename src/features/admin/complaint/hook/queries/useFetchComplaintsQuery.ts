
import { useQuery } from '@tanstack/react-query'
import {fetchComplaint} from "@/features/admin/complaint/api/fetchComplaint";

const useFetchComplaintsQuery = (id: number | undefined) => {
    const { error, data, refetch, isFetching } = useQuery({
        queryKey: ['complaint', id],
        queryFn: () => fetchComplaint(id),
        staleTime: 0
    })
    return { isFetching, error, data, refetch }
}

export default useFetchComplaintsQuery