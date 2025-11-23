import { useAxiosWithToken } from '@/hooks'
import {PictureGalleryResponse} from "@/features/admin/media/components/picture-gallery/types";

export const fetchPictureGallery = async (id: number | undefined) => {
    const response: PictureGalleryResponse = await useAxiosWithToken.get(`/media/file/${id}`)
    return response
}