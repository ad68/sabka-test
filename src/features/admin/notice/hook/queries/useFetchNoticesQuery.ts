
import { useQuery } from '@tanstack/react-query'
import {fetchNotice} from "@/features/admin/notice/api/fetchNotice";

const useFetchNoticesQuery = (id: number | undefined) => {
    const { error, data, refetch, isFetching } = useQuery({
        queryKey: ['notice', id],
        queryFn: () => fetchNotice(id),
        staleTime: 0
    })
    return { isFetching, error, data, refetch }
}

export default useFetchNoticesQuery