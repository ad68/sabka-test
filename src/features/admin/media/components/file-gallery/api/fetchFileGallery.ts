import { useAxiosWithToken } from '@/hooks'
import {FileGalleryResponse} from "@/features/admin/media/components/file-gallery/types";

export const fetchFileGallery = async (id: number | undefined) => {
    const response: FileGalleryResponse = await useAxiosWithToken.get(`/media/file/${id}`)
    return response
}