
import { useQuery } from '@tanstack/react-query'
import {fetchFilePromotional} from "@/features/admin/media/components/file-promotional/api/fetchFilePromotional";

const useFetchFilePromotionalQuery = (id: number | undefined) => {
    const { error, data, refetch, isFetching } = useQuery({
        queryKey: ['file-promotional', id],
        queryFn: () => fetchFilePromotional(id),
        staleTime: 0
    })
    return { isFetching, error, data, refetch }
}

export default useFetchFilePromotionalQuery