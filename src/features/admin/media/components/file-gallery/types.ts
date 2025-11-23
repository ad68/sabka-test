import {DocumentTypeEnum, MediaTypeEnum} from "@/features/admin/media/types";

export type FileGallery = {
    dto:FileGalleryDtoType,
    fileFiles: string,
    coverPicture:string,
}
export type FileGalleryDtoType = {
    mediaType:MediaTypeEnum.OTHER,
    documentType:DocumentTypeEnum.FILE,
    persianTitle: string
    englishTitle: string
    coverPicture:string[]
}
export type FileGalleryResponse = Array<FileGallery>

