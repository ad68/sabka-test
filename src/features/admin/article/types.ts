export type Article = {
    dto:ArticleDtoType,
    fileFiles: string,
}
export type ArticleDtoType = {
    persianTitle: string
    englishTitle: string
    datePublish: string
    articleType:string,
}
export type ArticlesResponse = Array<Article>

export type ARTICLETYPEENUM = 'REGULATION' | 'NOTICE' | 'POST' | 'PUBLICATION';