export type Notice = {
    dto:NoticeDtoType,
    fileFiles: string,
}
export type NoticeDtoType = {
    persianTitle: string
    englishTitle: string
    datePublish: string
    articleType:string,
}
export type NoticesResponse = Array<Notice>

