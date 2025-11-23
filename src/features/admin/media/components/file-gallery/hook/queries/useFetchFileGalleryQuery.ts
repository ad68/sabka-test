
import { useQuery } from '@tanstack/react-query'
import {fetchFileGallery} from "@/features/admin/media/components/file-gallery/api/fetchFileGallery";

const useFetchFileGalleryQuery = (id: number | undefined) => {
    const { error, data, refetch, isFetching } = useQuery({
        queryKey: ['file-galley', id],
        queryFn: () => fetchFileGallery(id),
        staleTime: 0
    })
    return { isFetching, error, data, refetch }
}

export default useFetchFileGalleryQuery