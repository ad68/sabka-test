'use client'
import { useEffect, useState } from 'react'
import useFetchNewsQuery from './queries/useFetchNewsQuery'
import { scrollToTop } from '@/utils'
const useNews = () => {
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [total, setTotal] = useState<number>(0)
    const { data, error, refetch, isFetching } = useFetchNewsQuery(currentPage - 1)
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
        currentPage,
        setCurrentPage,
        total,
        error,
        isFetching
    }
}
export default useNews