export enum MediaTypeEnum {
    PROMOTIONAL_MEDIA = 'PROMOTIONAL_MEDIA',
    OTHER = 'OTHER',
    FINANCIAL_INFORMATION = 'FINANCIAL_INFORMATION',
    VIDEO_GALLERY = 'VIDEO_GALLERY',
    EDUCATIONAL_BOOKLETS = 'EDUCATIONAL_BOOKLETS'
}

export enum DocumentTypeEnum {
    PICTURE = 'PICTURE',
    FILM = 'FILM',
    FILE = 'FILE'
}

export type PublicationInfo = {
    persianTitle: string;
    englishTitle: string;
};

export type Media = {
    dto: MediaDtoType;
    fileFiles: string;
    coverPicture: string;
};

export type MediaDtoType = {
    mediaType: MediaTypeEnum;
    publicationInfo: PublicationInfo;
    documentType:DocumentTypeEnum;
};

export type MediaResponse = Array<Media>;

