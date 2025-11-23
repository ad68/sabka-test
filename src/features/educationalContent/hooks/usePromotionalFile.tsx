import { useEffect, useState } from 'react'
import { scrollToTop } from '@/utils'
import useFetchPromotionalFileQuery from './queries/useFetchPromotionalFileQuery'
const usePromotionalFile = () => {
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [total, setTotal] = useState<number>(0)
    const { data, isFetching, refetch } = useFetchPromotionalFileQuery(currentPage - 1)
    useEffect(() => {
        if (data) {
            setTotal(data.totalElements)
        }
    }, [data])
    useEffect(() => {
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
export default usePromotionalFile