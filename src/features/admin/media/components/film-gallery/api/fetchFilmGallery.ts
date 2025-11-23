import { useAxiosWithToken } from '@/hooks'
import {FilmGalleryResponse} from "@/features/admin/media/components/film-gallery/types";

export const fetchFilmGallery = async (id: number | undefined) => {
    const response: FilmGalleryResponse = await useAxiosWithToken.get(`/media/file/${id}`)
    return response
}