'use client'
import VideoItem from './components/VideoItem'
import CustomButton from "@/components/kit/CustomButton"
import Link from "next/link"
import useVideos from '@/features/landing/hooks/useVideos'
import { useState } from 'react'
import CustomModal from '@/components/kit/CustomModal'
import CustomVideoPlayer from '@/components/kit/CustomVideoPlayer'
export default function Index() {
    const { data, isFetching } = useVideos()
    const [currentVideo, setCurrentVideo] = useState<string>("")
    const [openPlayer, setOpenPlayer] = useState(false)
    const playVideo = (url: string) => {
        setCurrentVideo(url)
        setOpenPlayer(true);
    }
    return <section className="min-h-[300px]  flex flex-col  justify-center items-center w-full">
        {isFetching && <div className="newsLoader"></div>}
        {!isFetching &&
            <>
                <div className="w-full mx-auto grid grid-cols-2 xl:grid-cols-3 gap-3 md:gap-4">
                    {data?.elements.slice(0, 6).map((item, index) => (<VideoItem playVideo={playVideo} key={index} videoSrc={item.fileUrl} title={item.persianTitle} fileName={item.originalFilename} id={item.id} date={item.createdOn} />))}
                </div>
                <div className="w-full flex justify-center mt-[52px]">
                    <Link href="/videos">
                        <CustomButton className="w-[132px] m-auto">مشاهده بیشتر</CustomButton>
                    </Link>
                </div>
            </>
        }
        <CustomModal width={1000} open={openPlayer} onClose={() => setOpenPlayer(false)}>
            <div className="w-full flex justify-center items-center">
                <CustomVideoPlayer url={currentVideo} />
            </div>
        </CustomModal>
    </section>
}
