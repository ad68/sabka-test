import { useEffect, useState } from 'react'

import { scrollToTop } from '@/utils'
import useFetchPublicationQuery from './queries/useFetchPublicationQuery'


const usePublication = () => {
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [total, setTotal] = useState<number>(0)
    const { data, isFetching, refetch } = useFetchPublicationQuery(currentPage - 1)
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
export default usePublication