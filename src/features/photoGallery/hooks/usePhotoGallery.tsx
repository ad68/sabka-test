import { useEffect, useState } from 'react'
import useFetchPhotosQuery from './queries/useFetchPhotos'
import { scrollToTop } from '@/utils'


const usePhotoGallery = () => {
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [total, setTotal] = useState<number>(0)
    const { data, isFetching, refetch } = useFetchPhotosQuery(currentPage - 1)
    useEffect(() => {
        if (data) {
            setTotal(data.totalElements)
        }
    }, [data])
    useEffect(() => {
        console.log('currentPage', currentPage)
        scrollToTop()
        refetch()
    }, [currentPage])
    return {
        data,
        isFetching,
        refetch,
        currentPage,
        setCurrentPage,
        total,
    }
}
export default usePhotoGallery