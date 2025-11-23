/* import { ReactElement } from "react" */
/* type ImageList = {
    imageUrl: string
} */
/* export type NewsDetail = {
    id: number
    imgUrl: string,
    images: ImageList[]
    title: string
    miniTitle: string
    summary: string
    description: ReactElement,
    date: string,
    time: string,
    view: string
} */
export type IndexProp = {
    params: Promise<{ newsId: string }>
}
export type NewsDetail = {
    createdBy: string,
    createdOn: string,
    modifiedBy: string,
    modifiedOn: string,
    version: number,
    enable: boolean,
    regDate: string,
    id: number,
    persianTitle1: string,
    englishTitle1: string,
    persianTitle2: string,
    englishTitle2: string,
    persianTitle3: string,
    englishTitle3: string,
    persianDescription: string,
    englishDescription: string,
    persianPublicationName: string,
    englishPublicationName: string,
    quarterlyIssue: string,
    yearPublish: string,
    fileUrl: string,
    datePublish: string,
    articleType: string,
    statusArticleType: string,
    visitNumber: number,
    documentFiles: any,
    metaData: string,
    shortCode: string | undefined | null
}