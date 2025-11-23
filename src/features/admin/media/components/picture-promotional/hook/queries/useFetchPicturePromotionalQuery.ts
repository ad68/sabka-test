
import { useQuery } from '@tanstack/react-query'
import {
    fetchPicturePromotional
} from "@/features/admin/media/components/picture-promotional/api/fetchPicturePromotional";

const useFetchPicturePromotionalQuery = (id: number | undefined) => {
    const { error, data, refetch, isFetching } = useQuery({
        queryKey: ['picture-promotional', id],
        queryFn: () => fetchPicturePromotional(id),
        staleTime: 0
    })
    return { isFetching, error, data, refetch }
}

export default useFetchPicturePromotionalQuery