import {DocumentTypeEnum, MediaTypeEnum} from "@/features/admin/media/types";

export type PicturePromotionalGallery = {
    dto:PicturePromotionalDtoType,
    fileFiles: string,
    coverPicture:string,
}
export type PicturePromotionalDtoType = {
    mediaType:MediaTypeEnum.PROMOTIONAL_MEDIA,
    documentType:DocumentTypeEnum.PICTURE,
    persianTitle: string
    englishTitle: string
    coverPicture:string[]
}
export type PicturePromotionalResponse = Array<PicturePromotionalGallery>

