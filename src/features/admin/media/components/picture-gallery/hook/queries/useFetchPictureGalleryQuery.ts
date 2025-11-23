
import { useQuery } from '@tanstack/react-query'
import {fetchPictureGallery} from "@/features/admin/media/components/picture-gallery/api/fetchPictureGallery";

const useFetchPictureGalleryQuery = (id: number | undefined) => {
    const { error, data, refetch, isFetching } = useQuery({
        queryKey: ['picture-galley', id],
        queryFn: () => fetchPictureGallery(id),
        staleTime: 0
    })
    return { isFetching, error, data, refetch }
}

export default useFetchPictureGalleryQuery