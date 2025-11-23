import {DocumentTypeEnum, MediaTypeEnum} from "@/features/admin/media/types";

export type FilmPromotionalGallery = {
    dto:FilmPromotionalDtoType,
    fileFiles: string,
    coverPicture:string,
}
export type FilmPromotionalDtoType = {
    mediaType:MediaTypeEnum.PROMOTIONAL_MEDIA,
    documentType:DocumentTypeEnum.FILM,
    persianTitle: string
    englishTitle: string
    coverPicture:string[]
}
export type FilmPromotionalResponse = Array<FilmPromotionalGallery>

