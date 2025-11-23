import useFetchPhotoDetailQuery from './queries/useFetchPhotoDetailQuery'
import { useParams } from 'next/navigation'
const usePhotoDetail = () => {
    const params = useParams()
    const { data } = useFetchPhotoDetailQuery(Number(params.photoId))
    return {
        data
    }
}
export default usePhotoDetail