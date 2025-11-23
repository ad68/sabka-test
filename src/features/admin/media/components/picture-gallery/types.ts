import {DocumentTypeEnum, MediaTypeEnum} from "@/features/admin/media/types";

export type PictureGallery = {
    dto:PictureGalleryDtoType,
    fileFiles: string,
    coverPicture:string,
}
export type PictureGalleryDtoType = {
    mediaType:MediaTypeEnum.OTHER,
    documentType:DocumentTypeEnum.PICTURE,
    persianTitle: string
    englishTitle: string
    coverPicture:string[]
}
export type PictureGalleryResponse = Array<PictureGallery>

