export type Post = {
    dto:PostDtoType,
    fileFiles: string,
}
export type PostDtoType = {
    persianTitle: string
    englishTitle: string
    datePublish: string
    articleType:string,
}
export type PostsResponse = Array<Post>

