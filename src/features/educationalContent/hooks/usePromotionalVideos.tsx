import { useEffect, useState } from 'react'
import useFetchVideosQuery from './queries/useFetchPromotionalVideosQuery'
import { scrollToTop } from '@/utils'
const usePromotionalVideos = () => {
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [total, setTotal] = useState<number>(0)
    const { data, isFetching, refetch } = useFetchVideosQuery(currentPage - 1)
    const [currentVideo, setCurrentVideo] = useState<string>("")
    const [openPlayer, setOpenPlayer] = useState(false)
    const playVideo = (url: string) => {
        setCurrentVideo(url)
        setOpenPlayer(true);
    }
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
        currentVideo,
        openPlayer,
        setOpenPlayer,
        playVideo

    }


}
export default usePromotionalVideos