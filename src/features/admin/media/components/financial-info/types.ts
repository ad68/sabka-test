import {DocumentTypeEnum, MediaTypeEnum} from "@/features/admin/media/types";

export type FinancialInfo = {
    dto:FinancialInfoDtoType,
    fileFiles: string,
    coverPicture:string,
}
export type FinancialInfoDtoType = {
    mediaType:MediaTypeEnum.OTHER,
    documentType:DocumentTypeEnum.PICTURE,
    persianTitle: string
    englishTitle: string
    coverPicture:string[]
}
export type FinancialInfoResponse = Array<FinancialInfo>

