import { NextPage } from 'next'
import NewsDetail from '@/features/newsDetail/components/NewsDetail'
import { fetchNewsDetail } from '@/features/newsDetail/api/fetchNewsDetail.server'
import ServerError from '@/components/kit/ServerError'
import { IndexProp } from '@/features/newsDetail/types'

export async function generateMetadata({ params }: any) {
    try {
        const { title } = await params
        return {
            title: decodeURIComponent(title),
            description: decodeURIComponent(title),
        }
    } catch {
        return { title: "خطا در بارگذاری خبر" }
    }
}
const Index: NextPage<IndexProp> = async ({ params }) => {
    try {
        const { newsId } = await params
        const data = await fetchNewsDetail(newsId)
        return <NewsDetail data={data} />
    } catch (err: any) {
        console.error(err)
        return <ServerError />
    }
}

export default Index
