import {DocumentTypeEnum, MediaTypeEnum} from "@/features/admin/media/types";

export type FilePromotionalGallery = {
    dto:FilePromotionalDtoType,
    fileFiles: string,
    coverPicture:string,
}
export type FilePromotionalDtoType = {
    mediaType:MediaTypeEnum.PROMOTIONAL_MEDIA,
    documentType:DocumentTypeEnum.FILE,
    persianTitle: string
    englishTitle: string
    coverPicture:string[]
}
export type FilePromotionalResponse = Array<FilePromotionalGallery>

