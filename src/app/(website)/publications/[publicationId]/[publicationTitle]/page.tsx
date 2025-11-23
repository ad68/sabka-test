import { NextPage } from 'next'
import PublicationDetail from '@/features/publicationDetail/components/PublicationDetail'
import { fetchPublicationDetail } from '@/features/publicationDetail/api/fetchPublicationDetail.server'
import { IndexProp } from '@/features/publicationDetail/types'
import ServerError from '@/components/kit/ServerError'
const Index: NextPage<IndexProp> = async ({ params }) => {
    try {
        const { publicationId } = await params
        const data = await fetchPublicationDetail(publicationId)
        return <>
            <PublicationDetail data={data} />
        </>
    } catch {
        return <ServerError />
    }
}
export default Index
