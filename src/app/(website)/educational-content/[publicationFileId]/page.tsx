import { NextPage } from 'next'
import PublicationDetail from '@/features/educationalContentDetail/components/PublicationDetail'
import { fetchPublicationFileDetail } from '@/features/educationalContentDetail/api/fetchPublicationFileDetail.server'

import ServerError from '@/components/kit/ServerError'
const Index: NextPage<any> = async ({ params }) => {
    try {
        const { publicationFileId } = await params
        const data = await fetchPublicationFileDetail(publicationFileId)
        return <>
            <PublicationDetail data={data} />
        </>
    } catch {
        return <ServerError />
    }
}
export default Index
