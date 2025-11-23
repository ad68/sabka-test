
import { useQuery } from '@tanstack/react-query'
import {fetchPost} from "@/features/admin/post/api/fetchPost";

const useFetchPostsQuery = (id: number | undefined) => {
    const { error, data, refetch, isFetching } = useQuery({
        queryKey: ['post', id],
        queryFn: () => fetchPost(id),
        staleTime: 0
    })
    return { isFetching, error, data, refetch }
}

export default useFetchPostsQuery