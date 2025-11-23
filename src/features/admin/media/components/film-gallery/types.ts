import {DocumentTypeEnum, MediaTypeEnum} from "@/features/admin/media/types";

export type FilmGallery = {
    dto:FilmGalleryDtoType,
    fileFiles: string,
    coverPicture:string,
}
export type FilmGalleryDtoType = {
    mediaType:MediaTypeEnum.OTHER,
    documentType:DocumentTypeEnum.FILM,
    persianTitle: string
    englishTitle: string
    coverPicture:string[]
}
export type FilmGalleryResponse = Array<FilmGallery>

