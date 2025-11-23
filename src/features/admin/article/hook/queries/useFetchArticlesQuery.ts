
import { useQuery } from '@tanstack/react-query'
import {fetchArticle} from "@/features/admin/article/api/fetchArticle";

const useFetchArticlesQuery = (id: number | undefined) => {
    const { error, data, refetch, isFetching } = useQuery({
        queryKey: ['article', id],
        queryFn: () => fetchArticle(id),
        staleTime: 0
    })
    return { isFetching, error, data, refetch }
}

export default useFetchArticlesQuery