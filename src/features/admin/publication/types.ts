export type Publication = {
    dto:PublicationDtoType,
    fileFiles: string,
}
export type PublicationDtoType = {
    persianTitle: string
    englishTitle: string
    datePublish: string
    articleType:string,
}
export type PublicationsResponse = Array<Publication>

